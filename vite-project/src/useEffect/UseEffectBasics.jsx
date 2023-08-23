import React, { useEffect,useState } from 'react'

const UseEffectBasics = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title =`New Messages (${count})`
    },[count])
    return (
    <>
        <div className="container text-center">
            <h1>Count</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} className="btn btn-success">
                Increase
            </button>
        </div>
    </>
    )
}

export default UseEffectBasics