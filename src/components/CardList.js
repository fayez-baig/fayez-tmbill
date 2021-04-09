import React from 'react';
import DisplayCard from './Card';
import './CardList.css';


const CardList = ({list,deleteCard,cardStrike,updateID}) =>{

   
    
    return (
        <div className="container" >
           
            <div className="row align-items-center no-gutters" >{
            
                    list.map((data,i) => {
        
                    // console.log(data.id);
                        return <DisplayCard key={i} id={i} name={data.taskName} description={data.description} taskDone={data.taskDone} deleteCard={deleteCard} cardStrike={cardStrike} />
                })   
               
             
               
                }

            </div>     

            
              
        </div>
        
    )
    
}


export default CardList;