import React from 'react'

const SingleBirthday = ({ id, image, name, age, rem }) => {
    return (
        <>
        <div className="d-flex gap-3 mb-3 bg-light p-3 border shadow">
            <div className="image">
                <img 
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                    src={image}/>
            </div>
        <div className="details">
            <h5>{name}</h5>
            <h6>{age} years</h6>
        </div>
        <div className="button d-flex ms-auto align-self-center">
                <button onClick={()=> rem (id)} className="btn btn-danger">
                    Remove
                </button>
            </div>                    
        </div>
        </>
    );
};

export default SingleBirthday