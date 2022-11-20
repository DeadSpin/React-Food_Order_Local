import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = () => {
  return (
    <div className={classes.backdrop}></div>
  )
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  )
}

const Modal = props => {

  const modal = <ModalOverlay>{props.children}</ModalOverlay>
  const domElement = document.getElementById('modal-overlay')
  const backdropElement = ReactDOM.createPortal(<Backdrop />, domElement)
  const modalElement = ReactDOM.createPortal(modal, domElement)
  
  return (
    <Fragment>
      {backdropElement}
      {modalElement}
    </Fragment>
  )
}

export default Modal