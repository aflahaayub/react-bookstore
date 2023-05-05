import { Fragment } from 'react'
import  {createPortal}  from 'react-dom'
import styleClasses from './Modal.module.css'
const Backdrop = props =>{
  return <div className={styleClasses.backdrop} onClick={props.onClose}></div>
}
const ModalOverlay = props =>{
  return <div className={styleClasses.modal}>
    <div className={styleClasses.content}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlays')
export default function Modal(props){
  return <Fragment>
    {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>
}