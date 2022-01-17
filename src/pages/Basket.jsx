
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem"

function Basket(props) {

    function getTotal() {
        let total = 0;
        for (const basketProduct of props.basket) {
            total += basketProduct.quantity * basketProduct.price
        }
        return total.toFixed(2)
    }


    return <main>
        <section className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {props.basket.map(basketItem =>
                    <BasketItem
                        key={basketItem.id}
                        basketItem={basketItem}
                        updateQuantityOfProduct={props.updateQuantityOfProduct}
                        basket={props.basket}
                        setBasket={props.setBasket}
                        updateBasketInServer={props.updateBasketInServer}
                        user={props.user}
                    />)}

                {/* <!--  --> */}
            </ul>
            {/* <!-- Basket total is calculated using each item's total from above --> */}
            <h3>Your total: £{getTotal()}</h3>
        </section>
    </main>
}
//  else {
//     return <main>
//         <section className="basket-container">
//             <h2>Please Log In first </h2>
//             <Link to='/login'>Click here to Log in</Link>
//         </section>
//     </main>
// }








export default Basket