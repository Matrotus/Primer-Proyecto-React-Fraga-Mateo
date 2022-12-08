import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const ItemList = ({products}) => {
    return ( 
        <div>
        {
                products.map(product => <ItemDetailContainer key={product.id} product={product}/>)
                
                }
        
        </div>  
    )
}
export default ItemList