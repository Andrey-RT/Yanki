import React,{useState} from 'react';
import './Counter.css'

const Counter = () => {
    const [counter,setCounter] = useState(1);
   
    
      
   
  
  
    function plus (){
      
      

      setCounter((prevC) =>{
        return prevC +1
        
       
      })
    }
    function minus (){
      if(counter !==1) {
        
        setCounter(counter-1)
        
      }
     
    }
   
   
    
    
    return (
        <div className='counter_container'   >
          
      <button onClick={plus}  >+</button>
    
      <p>{counter}</p>
        

      <button onClick={minus}>-</button>
     
     
            
        </div>
    ); 
};

export default Counter;