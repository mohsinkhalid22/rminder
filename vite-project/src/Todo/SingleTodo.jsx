import React from 'react'
import {IoMdTrash} from 'react-icons/io'

const SingleTodo = ({todo,id,deleteTodo}) => {
    const handleClick = (id) => {
        console.log(id)
    }
    return (
        <>
            <h5>{todo}</h5>
            <IoMdTrash onClick={()=>deleteTodo(id)} style={{color:'red',cursor:'pointer'}}/>
        </>
    )
}

export default SingleTodo