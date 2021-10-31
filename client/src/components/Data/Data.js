import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux' 
import { useParams } from 'react-router';
import {useHistory} from "react-router-dom";

import{addBasket} from '../../redux/Action/ActionCreator'

function Data() {
    const [btn, setBtn] = useState(false)
    const history = useHistory()
    const {id} = useParams()
    const dispatch = useDispatch()
    const store = useSelector(store=>store)
    const list = store.testReducer.list
   
    const BtnHandler=()=>{        
        dispatch(addBasket(id))
        setBtn(true)
    }
    const BtnList=()=>{
        history.push(`/`)
    }
    const BtnBasket=()=>{
        history.push(`/basket`)
    }
    return (
        <div className="cart">
            {list.filter((el)=>(el.id === id)).map((el, index)=>(
                <div key={index} className="title">
                    <div className="title__img">
                        <picture>
                            <img src={el.url} alt="Ваш товар"/>
                        </picture>
                    </div>
                    <div className="title__body">
                        <div className="title__name">
                            <p>Название:</p> <span>{el.title}</span>
                        </div>
                        <div className="title__name">
                            <p>Продавец:</p> <span>{el.vendor}</span>
                        </div>
                        <div className="title__name">
                            <p>Колличество:</p> <span>{el.pack}</span>
                        </div>
                        <div className="title__name">
                            <p>Цена:</p> <span>{el.price}</span>
                        </div>
                        <div className="title__box-btn">
                            {!btn && <button onClick={BtnHandler} className="title__btn">Добавить в карзину</button>}
                        </div> 
                        <div className="title__box-back">
                            {btn && <>
                                <button onClick={BtnList} className="title__btn">Вернуться к выбору</button>
                                <button onClick={BtnBasket} className="title__btn title__btn-basket">Перейти в корзину</button>
                                </>
                            }
                        </div>
                    </div>

                </div> 
            ))
            }
        </div>
    );
}

export default Data;