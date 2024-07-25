import { useState } from "react";

function Nine() {
    const [count, setCount] = useState(0);
   

    const btnUpdateCount = () => {
        if (count <= 50) {
            setCount(count + 2);
            
        }
    };

    const btnCanDecrement = () => {
        if (count>0) {
            setCount(count - 2);
        }
    };
    const addCart=()=>{
        setCount(0)
    }
    return (
        <div>
            {(count===0)}?
            <div>
            <button type="button" className="btn btn-dark" onClick={addCart}>AddCart</button>
            </div>:
            <button type="button" className="btn btn-dark" onClick={btnUpdateCount}>Increase</button>
            <h1>Count: {count}</h1>
            <button type="button" className="btn btn-dark" onClick={btnCanDecrement}>decrease</button>
            
        </div>
    );
}

export default Nine;
