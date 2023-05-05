import { useState } from "react"
import Header from "./components/Layout/Header.js"
import Books from "./components/Books/Books.js"
import Cart from "./components/Cart/Cart.js"
import CartProvider from "./store/CartProvider.js"

function App() {
  const [cartShown, setCartShown] = useState(false)
  const showCartHandler = () => {
    setCartShown(true)
  }

  const hideCartHandler = () => {
    setCartShown(false)
  }
  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  )
}

export default App
