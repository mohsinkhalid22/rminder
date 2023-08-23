import React, { useEffect, useState } from 'react'

const CleanUp = () => {
    const [size,setSize] = useState(window.innerWidth);
    const windowSize = () => {
        setSize(window.innerWidth);
    }
    const [height,setHeight] = useState(window.innerHeight);
    const windowSizee = () => {
        setHeight(window.innerHeight);
    }

    useEffect( () => {
        window.addEventListener('resize',windowSize)
        return () => {
            window.removeEventListener('resize',windowSize)
        }

    })
    useEffect( ()=> {
        window.addEventListener('resize',windowSize)
        return () => {
            window.removeEventListener('resize',windowSize)
        }
    })




    return (
        <>
        <div className="container text-center">
            <h1 className="display-1">Window Size:{size}</h1>
            <h1 className="display-4">Window Height:{height}</h1>
            </div>
        </>
    )
}

export default CleanUp;