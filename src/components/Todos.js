import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delTodo, editTodo} from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrFormEdit} from 'react-icons/gr'
function Todos() {
    const state = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    const handleDel = (id) => {
        dispatch(delTodo(id,state))
    }
    const handleEdit = (id) => {
        let title = prompt("Enter title");
        let newTodo = {id:id, text: title}
        console.log(newTodo)
        dispatch(editTodo(newTodo))
    }
    return (
        <div>
            {
                state.map((item) => {
                    console.log(item)
                 return (
                    <div className={styles.flex} style={{margin:"15px"}}>
                    <table>
                        <tr>
                            <td><li key={item.id}>{item.text}</li></td>
                            <td>
                                <button className={styles.button} onClick={() => handleDel(item.id)}><RiDeleteBin6Line color="red"/></button>
                            </td>
                            <td>
                                <button className={styles.button} onClick={() => handleEdit(item.id)}><GrFormEdit color="#4fb4d4"/></button>
                            </td>
                        </tr>
                    </table>
                    </div>
                 )
                })
            }
        </div>
    )
}

export default Todos