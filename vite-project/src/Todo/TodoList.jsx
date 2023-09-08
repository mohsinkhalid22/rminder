import React, { useState } from 'react'
import SingleTodo from './SingleTodo'; 


const TodoList = () => {
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const myData = {
            todo, id: Date.now()
        }
        // console.log(todo)
        setTodos([...todos,myData])
        setTodo('')
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    }

    return (
        <>
        <div className="container shadow p-3 col-md-7 col-lg-5 m-auto">
            <h1 className="display-1 text-center">TodoList</h1>
            <form>
                <label htmlFor="">Your Todo</label>
                <input
                value={todo} 
                onChange={(e)=>setTodo(e.target.value)}
                className='form-control' 
                type="text" placeholder='Enter your todo...' />
                <button onClick={handleSubmit} className='btn btn-info w-100 my-3'>
                    Add Todo
                </button>
            </form>
        </div>
            <div className="row container col-lg-6 m-auto text-align-center justify-content-center">
                {todos.map((todo)=>{
                    return <div className="col-sm-4 p-5 m-2 shadow border rounded">
                        <SingleTodo key={todo.id} {...todo} deleteTodo = {handleDelete}/>
                        
                    </div>
                })}
            </div>
        </>
    )
}

export default TodoList