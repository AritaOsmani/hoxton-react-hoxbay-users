import Product from "../components/Product"

function Products(props) {
    return <main>
        <section className="products-container main-wrapper">
            <ul className="products-container__list">
                {props.products.map(product =>
                    <Product
                        product={product}
                        key={product.id}
                    />)}



                {/* <!-- Single item --> */}


                {/* <!-- More items here --> */}
            </ul>
        </section>
    </main>

}
export default Products