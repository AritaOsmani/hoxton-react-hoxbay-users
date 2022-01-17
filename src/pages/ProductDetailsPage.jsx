import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductDetail from "../components/ProductDetails"

function ProductDetailsPage(props) {
    const params = useParams()
    const [product, setProduct] = useState(null);

    function getProductById() {
        fetch(`http://localhost:3000/products/${params.id}`).then(res => res.json()).then(productFromServer => setProduct(productFromServer))
    }
    useEffect(getProductById, [])

    if (product === null) {
        return <main>Loading...</main>
    }
    if (product.title === undefined) {
        return <main>Product not found!!</main>
    }
    return <main>
        <ProductDetail
            user={props.user}
            product={product}
            basket={props.basket}
            setBasket={props.setBasket}
            updateQuantityOfProduct={props.updateQuantityOfProduct}
            updateBasketInServer={props.updateBasketInServer}
        />
    </main>
}
export default ProductDetailsPage