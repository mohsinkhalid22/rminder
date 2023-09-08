import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [name,setName] = useState('');
    const [lName,setLName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault()
        setName('')
        setLName('')
        setEmail('')
        setPassword('');
        setConfirmPassword('');
        const userData = {
            name,email,password
        }
        console.log(userData)
    }

    return (
        <>
        <div className="container col-lg-5 p-4 border-4 mx-auto shadow mt-4">
            <label>First Name</label>
            <input type="text" 
            placeholder='Enter your name'
            className='form-control my-2' 
            value={name}
            onChange={(e)=>setName(e.target.value)}

            />
            <label>Last Name</label>
            <input type="text" 
            placeholder='Enter your name'
            className='form-control my-2' 
            value={lName}
            onChange={(e)=>setLName(e.target.value)}

            />
            <label>Email</label>
            <input type="email" 
            placeholder='Enter your email' 
            className='form-control my-2' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            />
            <label>Password</label>
            <input type="password" 
            placeholder='Enter your password' 
            className='form-control my-2' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

            />
            <label>Confirm Password</label>
            <input type="password" 
            placeholder='Enter your password' 
            className='form-control my-2' 
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}

            />
            <button onClick={handleClick} className="btn btn-dark my-2 w-100">
                Add Fields
            </button>
        </div>
        </>
    )
}

export default Form