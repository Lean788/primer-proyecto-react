import React, { useState } from 'react';

const Counter_kata2 = props => {
    const [counter, setCounter] = useState(props.initialValue);
    const increment = () => {
        setCounter(counter + props.step);
    }
    const decrement = () => {
        if(counter>0){
            setCounter(counter - props.step);
        }
    }
    
        return <div>
            <button onClick={increment}>+</button>
            <span>{counter}</span>
            <button onClick={decrement}>-</button>

        </div>
        
    
}

export default Counter_kata2;