import { useParams } from "react-router"
import Product from "../components/Product"

function SearchProducts(props) {
    const params = useParams()
    let searchProducts = props.products.filter(prod => prod.title.toUpperCase().includes(params.title.toUpperCase()))

    return <ul className="products-container__list">
        {searchProducts.map(product =>
            <Product
                product={product}
                key={product.id}
            />)}
    </ul>
}
export default SearchProducts