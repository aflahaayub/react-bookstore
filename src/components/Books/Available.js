import styleClasses from "./Available.module.css"
import Card from "../UI/Card"
import BookItem from "./BookItem/BookItem"
import DUMMY_BOOKS from "./BooksDummy"

export default function Available() {
  const booksList = DUMMY_BOOKS.map(book => (
    <BookItem
      id={book.id}
      key={book.id}
      name={book.name}
      author={book.author}
      desc={book.description}
      price={book.price}
      img={book.img}
    />
  ))

  return (
    <section className={styleClasses.books}>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  )
}
