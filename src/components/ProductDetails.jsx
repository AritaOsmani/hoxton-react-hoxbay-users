import { Link } from "react-router-dom"

function ProductDetail(props) {

    function addProductToBag(product) {
        const newBasket = JSON.parse(JSON.stringify(props.basket))
        let foundProduct = newBasket.find(productInBasket => productInBasket.id === product.id)
        if (foundProduct) {
            props.updateQuantityOfProduct(product, foundProduct.quantity + 1)
        } else {
            const itemToAdd = { ...product, quantity: 1 }
            newBasket.push(itemToAdd)
            props.setBasket(newBasket)
            props.updateBasketInServer(props.user, newBasket)
        }

    }
    return <section className="product-detail main-wrapper">
        <img
            src={props.product.image}
            alt={props.product.title}
        />
        <div className="product-detail__side" style={{ borderColor: "var(--yellow);" }}>
            <h3></h3>
            <h2>{props.product.title}</h2>
            <p>
                {props.product.description}
            </p>
            <p>£{props.product.price}</p>
            {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
            <Link to='/basket'>
                <button
                    onClick={event => {
                        addProductToBag(props.product)

                    }}
                    className={props.user === '' ? 'addToBasket-btn-notvisible' : 'addToBasket-btn-visible'}>
                    Add to basket</button>
            </Link>
        </div>
    </section>
}
export default ProductDetail