import React from 'react'
import Todos from './Todos'
import {useDispatch} from 'react-redux'
import {addTodo, delAll} from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'
import {MdAdd} from 'react-icons/md'
import {RiDeleteBin6Line} from 'react-icons/ri'
import image from '../todo.jpg'

function AddTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = React.useState('')

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        e.target.parentElement.firstChild.value = ''
        dispatch(addTodo(todo))
    }
    const handleDel = (e) => {
        e.preventDefault()
        dispatch(delAll())
    }

    return (
        <div>
            <h3 className={styles.value} style={{margin:"25px"}}>TASK MANAGER</h3>
            <div>
            <img src={image} width="20%"/>
            </div>
             <div>
                <input type="text" className={styles.textbox} onChange={handleChange}/>
                <button className={`${styles.button} ${styles.btnLg}`} onClick={handlesubmit}><MdAdd color="#218838"/></button>
                <button className={`${styles.button} ${styles.btnLg}`} onClick={handleDel}><RiDeleteBin6Line color="red"/></button>
                <Todos/>
            </div>
        </div>
    )
}

export default AddTodo
