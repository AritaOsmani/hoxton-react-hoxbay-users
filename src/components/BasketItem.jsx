function BasketItem(props) {

    function removeProductFromBasket(product) {
        let newBasket = JSON.parse(JSON.stringify(props.basket))
        newBasket = newBasket.filter(productInBasket => productInBasket.id !== product.id)
        props.setBasket(newBasket)
        props.updateBasketInServer(props.user, newBasket)
    }


    function getTotalOfBasketItem() {
        let total = props.basketItem.price * props.basketItem.quantity
        return total
    }
    return <li>
        <article className="basket-container__item">
            <img
                src={props.basketItem.image}
                alt={props.basketItem.title}
                width="90"
            />
            <p>{props.basketItem.title}</p>
            <p>
                Qty:
                <select defaultValue={props.basketItem.quantity}
                    onChange={event => {
                        if (Number(event.target.value) === 0) {
                            removeProductFromBasket(props.basketItem)
                            // props.updateQuantityOfProduct(props.basketItem, Number(event.target.value))
                        } else {
                            props.updateQuantityOfProduct(props.basketItem, Number(event.target.value))
                        }

                    }}
                ><option value="0">0</option
                ><option value="1">1</option
                ><option value="2">2</option
                ><option value="3">3</option></select
                >
            </p>
            {/* <!-- The item total is calculated using the Qty selected value --> */}
            <p>Item total: £{getTotalOfBasketItem()}</p>
        </article>
    </li>
}
export default BasketItem