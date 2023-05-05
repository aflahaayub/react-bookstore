import { Fragment } from "react"
import Available from "./Available"
import BooksSummary from "./BooksSummary"
export default function Books() {
  return (
    <Fragment>
      <BooksSummary />
      <Available />
    </Fragment>
  )
}
