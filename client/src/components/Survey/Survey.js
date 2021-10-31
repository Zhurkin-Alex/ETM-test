import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux' 
import {ThunkAddList} from '../../redux/Thunk/Thunk'
import{addFilterPriceAC,addFilterAC} from '../../redux/Action/ActionCreator'
import List from "../List/List"

import { Slider } from '@mui/material';

function Survey() {
  const dispatch = useDispatch()
  const store = useSelector(store=>store)
  const list = store.testReducer.list
  const filter = store.testReducer.filter
  useEffect(()=>{
    dispatch(ThunkAddList())
  },[dispatch])
  
  const filterHandler=(e)=>{
    if(e.target.value ==='Стоимость'){
      if(filter.length===0){
      const filterMap = list.sort((a,b)=> a.price>b.price? 1:-1)
      dispatch(addFilterPriceAC(filterMap))
      }
      if(filter.length>1){
        const filterMap = filter.sort((a,b)=> a.price>b.price? 1:-1)
        dispatch(addFilterAC(filterMap))
      }
    }
  }

  const [value, setValue] = useState([50,6800])
  const updateChange= (e,data)=>{
    setValue(data)
    let filterMap =[]
    let item = list
    item.forEach((el)=>{
      if(el.price>=value[0] && el.price<=value[1]){
        filterMap.push(el)
        dispatch(addFilterAC(filterMap))
      }
    })
    
  }
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className="container__box">
      <div className="filter ">
        <label>
          <span>Фильтр: </span>
          <div className="filter__select">
              <select className="form-select" aria-label="Default select example" onChange={filterHandler}>
                  <option value='' >Выберите фильтр</option>
                  <option value="Стоимость">Стоимость по возрастанию</option>
                  {/* <option value="Заглушка">Заглушка</option> */}
                 
              </select>
              
          </div>
        </label>
        <div className="filter__slider">
          <div className="filter__slider-name">Диапазон цены</div>
          <div className="filter__slider-box">
            <span>{value[0]}</span>
            <Slider
            value={value}
            onChange={updateChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={50}
            max={6800}
            />
            <span>{value[1]}</span>
          </div>
          
        </div>
      </div>
      {filter.length===0 && list?.map(el=> <List key={el.id} el={el}/> )}
      {filter.length>1 && filter?.map(el=> <List key={el.id} el={el}/> )}
    </div>
  );
}

export default Survey;