import { useEffect, useState } from "react"
import Category from "../components/Category"

function Categories() {
    const [categories, setCategories] = useState([]);

    function getCategoriesFromServer() {
        fetch('http://localhost:3000/categories').then(res => res.json()).then(categoriesFromServer => setCategories(categoriesFromServer))
    }
    useEffect(getCategoriesFromServer, [])
    return <main>
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
                {categories.map(category =>
                    <Category
                        key={category.id}
                        category={category}
                    />)}


            </ul>
        </section>
    </main>

}
export default Categories