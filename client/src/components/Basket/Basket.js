import React from 'react';
import {useSelector} from 'react-redux' 


function Basket() {
    const store = useSelector(store=>store)
    const list = store.testReducer.list
    const basket = store.testReducer.basket
    const obj = []
    
    list.forEach((el)=>{
        for(let key of basket){
            if (el.id === key){
                obj.push(el)
            }
        }
    })
    let total = obj.reduce((ac,el)=>ac+=el.price,0)
    
    return (
        <>
        
        {obj.map((el, index)=>(
            <div key={index} className="title">
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
            </div> ))
            
        }

            <div className="basket__cash">
                <div className="basket__total">
                    <span>Стоимость заказа: </span> 
                    <span>{total}</span>
                </div>
                <div className="basket__form">
                    <button>Оформить заказ</button>
                </div>
                
            </div>
        </>
    );
}

export default Basket;