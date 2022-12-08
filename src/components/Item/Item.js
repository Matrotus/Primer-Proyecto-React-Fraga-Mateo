import {Link} from 'react-router-dom'


const Item = ({ product }) => {
    return (
        <div>
                <img src="{product.img}"/>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p> ${product.price}</p>
                <link to = {`/detail/${product.id}`}>Ver detalle</link>
        </div>
)
}

export default Item;