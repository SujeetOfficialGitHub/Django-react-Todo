import React from 'react'
import { Modal } from 'react-bootstrap'
import ButtonBox from './ButtonBox'
const ModalBox = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <b>{props.data.category}</b>
            <p>{props.data.description}</p>
        </Modal.Body>
    </Modal>
  )
}

export default ModalBox