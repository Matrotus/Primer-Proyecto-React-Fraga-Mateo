import {Link} from 'react-router-dom'

const Item = ({ product }) => {
        
        return (
        <div className='tarjeta'>
                <img src= {product.img} style = {{width: 200}} />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p> ${product.price}</p>
                <Link className='boton-detail' to = {`/detail/${product.id}`}>Ver detalle</Link>
        </div>
)
}

export default Item;