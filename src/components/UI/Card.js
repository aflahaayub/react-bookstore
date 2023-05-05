import styleClasses from './Card.module.css'
export default function Card(props){
  return <div className={styleClasses.card}>{props.children}</div> 
}