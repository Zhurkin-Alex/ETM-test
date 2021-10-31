import{addFilterPriceAC} from '../Action/ActionCreator'


export const ThunkAddList = ()=>{
  
    return(dispatch)=>{
        fetch(`http://localhost:4000/client/addAll`)
            .then(res=>res.json())
            .then(data=> 
                dispatch(addFilterPriceAC(data.rows))
                )
    }
}


