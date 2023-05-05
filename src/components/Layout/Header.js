import { Fragment } from "react"
import HeaderCartButton from "./HeaderCartButton.js"
import styleClasses from "./Header.module.css"
export default function Header(props) {
  return (
    <Fragment>
      <header className={styleClasses.header}>
        <h1>BookStore</h1>
        <HeaderCartButton onClickBtn={props.onShowCart} />
      </header>
      <div className={styleClasses["main-image"]}>
        <img
          src="https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  )
}
