import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Counter = ({initial , stock, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    
    // const noStock = (stock) => {
    //     return (
    //         <div>
    //             <button className="btn-red">+</button>
    //         </div>
    //     )

    // }
    const notifyStock = () => toast("You reached quantity allowed");
    const increment = ()=> {
        if(count <stock){
            setCount(count + 1)
        }else{
            notifyStock()
        }
    }

    const decrement = () => { 
        if(count > 0) {
            setCount(count - 1)
        }
        
    }

    return (
        <div>
            <div className="botones">
                <button className="btn" onClick={() => decrement()} >-</button>
                <h2>{count}</h2>
                <button className="btn" onClick={() => increment()} >+</button>
                <button className="btn-add"  onClick={() => onAdd(count) }>Add to Cart</button> 
            </div>
            
        </div>
    )
}

export default Counter;