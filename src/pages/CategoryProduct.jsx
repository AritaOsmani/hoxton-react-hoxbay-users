import { useParams } from "react-router"
import Product from "../components/Product"

function CategoryProduct(props) {
    const params = useParams()

    const categoryProducts = props.products.filter(product => product.categoryId === Number(params.id))


    return <main>
        <ul className="products-container__list">
            {categoryProducts.map(product => <Product product={product} key={product.id} />)}
        </ul>
    </main>
}
export default CategoryProduct