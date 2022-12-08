import {useState, useEffect} from 'react'
import {getProductById} from '../asyncMock'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
   const [product, setProduct] = useState({})
   
   const {productId} = useParams()
   useEffect(() =>{ 
    getProductById(productId)
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.log(error)
    })

   }, [productId])
   
    return (
        <div>
                <img src="{product.img}"/>
                <h3>{product.name}</h3>
                <p> ${product.price}</p>
        </div>
)
}

export default ItemDetailContainer;