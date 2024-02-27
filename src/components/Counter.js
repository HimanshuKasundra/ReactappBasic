import { useState } from "react";

const Counter = ()=>{
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
        console.log(count);
    }
    const decrement = ()=>{
        setCount(count-1);
        console.log(count);
    }
    
    return (
    <>
    <div className="p-4">
    <button onClick={increment}>+</button>
    {count}
    <button onClick={decrement}>-</button>
    
    </div>
    </>
    );
}

export default Counter;