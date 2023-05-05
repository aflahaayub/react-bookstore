import styleClasses from "./BooksSummary.module.css"
export default function BooksSummary() {
  return (
    <section className={styleClasses.summary}>
      <h2>Best Books Goes to You.</h2>
      <p>
        If you want to fill your shelves with the best books of all time, you're
        in the right place.
      </p>
      <p>
        We believe the best books open our minds to new characters, points of
        view, and worlds. They stay with us long after the last page is read.
        They make us want to share them with everyone.
      </p>
    </section>
  )
}
