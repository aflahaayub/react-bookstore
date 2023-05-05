import { useContext } from "react"
import BookItemForm from "./BookItemForm"
import styleClasses from "./BookItem.module.css"
import CartContext from "../../../store/cart-context.js"
export default function BookItem(props) {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      author: props.author,
      amount: amount,
      price: props.price,
      img: props.img,
    })
  }
  return (
    <li className={styleClasses.book}>
      <div className={styleClasses.detail}>
        <img className={styleClasses.img} src={props.img} alt="" />
        <div>
          <h3>{props.name}</h3>
          <div className={styleClasses.author}>{props.author}</div>
          <div className={styleClasses.description}>{props.desc}</div>
          <div className={styleClasses.price}>{price}</div>
        </div>
      </div>
      <div>
        <BookItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  )
}
