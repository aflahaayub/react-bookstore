import { useRef, useState } from "react"
import Input from "../../UI/Input"
import styleClasses from "./BookItemForm.module.css"

export default function BookItemForm(props) {
  const [notValid, setNotValid] = useState(false)
  const amountInputRef = useRef(null)

  const submitHandler = e => {
    e.preventDefault()
    const amountVal = amountInputRef.current.value
    const numAmount = +amountVal
    if (numAmount.length === 0 || numAmount < 1 || numAmount > 5) {
      setNotValid(true)
      return
    }

    props.onAddToCart(numAmount)
  }
  return (
    <form className={styleClasses.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `Amount_${props.id}`,
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {notValid && <p>Please enter a valid amount!</p>}
    </form>
  )
}
