import React, { useState, useEffect } from 'react';

const Counter = props => {
    const [counter, setCounter] = useState(props.initialValue);
    useEffect(()=>{
        console.log("el counter se ha montado");
        return ()=>{
            console.log("el counter se ha desmontado")
        }
    },[])
    useEffect(()=>{
        console.log("el componente se ha actualizado");
        if(counter<50){
            setCounter(counter + props.step)
        }
    }, [counter, props.step]);
    
    const increment = () => {
        setCounter(counter + props.step);
    }
    const decrement = () => {
        if(counter>0){
            setCounter(counter - props.step);
        }
    }
    
    return (<div className='counter'>
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
    </div>
    ) 
    
}

export default Counter;