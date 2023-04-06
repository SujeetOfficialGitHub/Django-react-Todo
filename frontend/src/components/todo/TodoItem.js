import React,{useState} from 'react'
import TodoDate from '../todo_date/TodoDate'
import ButtonBox from '../ui/ButtonBox'
import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../app/features/todoSlice'
import ModalBox from '../ui/ModalBox'


const TodoItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
    const editHandler = (item) => {
      props.onPopulateDataIntoForm(item)
    }
    const deleteHandler = (id) => {
      dispatch(deleteTodo({id}))
    }


  return (
    <>
      <ModalBox show={show} handleClose={handleClose} data={props} />
      <tr>
          <td></td>
          <td>
              <span style={{marginRight: "5px"}}>{props.title}</span>
              <ButtonBox variant="outline-secondary btn-sm" onClick={handleShow}>
                <FiBookOpen/>
              </ButtonBox>
          </td>
          <td>{props.category}</td>
          <td className='m-0 p-0'>
              <TodoDate date={props.date} />
          </td>
          <td>
              <ButtonBox onClick={() => editHandler({
                id: props.id,
                title: props.title,
                category: props.category,
                description: props.description,
                date: props.date
              })} variant="warning btn-sm"><AiFillEdit/></ButtonBox>
              <ButtonBox onClick={() => deleteHandler(props.id)} variant="danger btn-sm" style={{marginLeft: '8px'}}><FaTrash/></ButtonBox>
          </td>
      </tr>
    </>
  )
}

export default TodoItem