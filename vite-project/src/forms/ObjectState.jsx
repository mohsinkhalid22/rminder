import React, { useState } from 'react'
import Form from './Form'


const ObjectState = () => {
    const [user,setUser] = useState({
        name:'Ali',email:'ali@mail.com',age:20
    })
    // destructure
    const {name,email,age} = user;

    // handle the click
    const changeName = () => {
        setUser({...user,name:'',email:'newemail@mail.com'})
    }

    return (
        <>
        <div className="container text-center">
            <h1>Hello {name}</h1>
            <h3>Email: {email}</h3>
            <h4>Age: {age}</h4>
            <button onClick={changeName} className="btn btn-dark">
                Change Name
            </button>
        </div>
        </>
    )
}

export default ObjectState