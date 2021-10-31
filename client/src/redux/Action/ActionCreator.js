import {ADDPRICE,ADDBASKET,ADDFILTER} from './ActionType'


export const addFilterPriceAC = (payload)=>{
  return {
     type: ADDPRICE,
     payload
   }
}

export const addBasket = (payload)=>{
  return {
     type: ADDBASKET,
     payload
   }
}
export const addFilterAC = (payload)=>{
  return {
     type: ADDFILTER,
     payload
   }
}

 