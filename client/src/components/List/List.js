import React from 'react';
import {Link} from 'react-router-dom'

function List({el}) {

    return (
       
        <Link className="title" to={`/data/${el.id}`}>
           
           <div className="title__name">
               <p>Название:</p> <span>{el.title}</span>
           </div>
           <div className="title__name">
               <p>Продавец:</p> <span>{el.vendor}</span>
           </div>
           <div className="title__name">
               <p>Количество:</p> <span>{el.pack}</span>
           </div>
           <div className="title__name">
               <p>Цена:</p> <span>{el.price}</span>
           </div>
           
       </Link> 
        
    );
}

export default List;