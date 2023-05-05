import { useContext, useEffect, useState } from "react"
import CartIcon from "../Cart/CartIcon.js"
import CartContext from "../../store/cart-context.js"
import styleClasses from "./HeaderCartButton.module.css"

export default function HeaderCartButton(props) {
  const [btnIsBumb, setIsBtnBumb] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx
  const numOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${styleClasses.button} ${
    btnIsBumb ? styleClasses.bump : ""
  }`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setIsBtnBumb(true)

    const timer = setTimeout(() => {
      setIsBtnBumb(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClickBtn}>
      <span className={styleClasses.icon}>
        <CartIcon />
      </span>
      <span className={styleClasses.badge}>{numOfCartItems}</span>
    </button>
  )
}
