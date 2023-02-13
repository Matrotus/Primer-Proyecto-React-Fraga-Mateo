import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counter from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({id,name,img, description, price,stock}) => {
    const { addItem, isInCart }  = useContext(CartContext)
    const handleOnAdd = (quantity) => { notify(quantity)

        addItem({id,name,price,quantity})

    }    
    
    const notify = (quantity) => {
            
        if(quantity > 0 ){
                toast("Added to Cart (" +quantity +')')
            }else{
                toast("Please select quantity to proceed!")
            }
                } 
        
    return (
        <div className='tarjeta'>
                <h3>{name}</h3>
                <img width={400} src={img}/>
                <p>{description}</p>
                <p> ${price}</p>
                { isInCart(id)
                ? <Link to = '/cart'>Terminar Compra</Link> 
                : stock > 0
                ? <Counter initial={0} stock={15} onAdd={handleOnAdd}/>
                : <h1>No hay stock</h1> }
                <ToastContainer />
                        
        </div>
)
    }
export default ItemDetail