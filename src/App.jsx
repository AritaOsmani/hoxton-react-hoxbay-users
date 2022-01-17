
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
// @ts-ignore
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import LogIn from "./pages/LogIn";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Products from "./pages/Products";
import Register from "./pages/Register";
import SearchProducts from "./pages/SearchProducts";
import Welcome from "./pages/Welcome";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');
  const [basket, setBasket] = useState([])


  function getProductsFromServer() {
    fetch('http://localhost:3000/products').then(res => res.json()).then(productFromServer => setProducts(productFromServer))
  }
  useEffect(getProductsFromServer, []);

  function updateQuantityOfProduct(product, amount) {
    const newBasket = JSON.parse(JSON.stringify(basket))
    const match = newBasket.find(productInBasket => productInBasket.id === product.id)
    match.quantity = amount;
    console.log('User:', user)
    updateBasketInServer(user, newBasket)
    setBasket(newBasket)

  }

  function updateBasketInServer(user, newBasket) {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ basket: newBasket })
    })
  }


  return (
    <>
      <Header user={user} />
      <main>
        {
          <Routes>
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/products/:id' element={<ProductDetailsPage user={user} basket={basket} setBasket={setBasket} updateQuantityOfProduct={updateQuantityOfProduct} updateBasketInServer={updateBasketInServer} />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/categories/:id' element={<CategoryProduct products={products} />} />
            <Route path='/login' element={<LogIn setUser={setUser} setBasket={setBasket} />} />
            <Route path='/basket' element={
              <Basket
                user={user}
                basket={basket}
                updateQuantityOfProduct={updateQuantityOfProduct}
                setBasket={setBasket}
                updateBasketInServer={updateBasketInServer}
              />} />
            <Route path='/register' element={<Register />} />
            <Route path='/welcome/:name' element={<Welcome />} />
            <Route path='/products/product/:title' element={<SearchProducts products={products} />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
