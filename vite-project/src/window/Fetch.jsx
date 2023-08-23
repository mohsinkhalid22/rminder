import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Fetch() {
    const url = 'https://dummyjson.com/products';
    const [isLoading,setIsLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const getData = async () => {
        try {
            setIsLoading(true);
            const data = await fetch(url);
            const response = await data.json();
            console.log(response.products);
            setProducts(response.products);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, [])

    if(isLoading) {
        return <h1 className="display-1 text-center">Loading....</h1>
    }
    
    return (
        <>
            <div className="container">
                {products?.map((prod) => {
                    return (
                        <>
                            <h1>{prod.id}</h1>
                            <h1>{prod.title}</h1>
                            {prod.images?.map((image) => {
                                return (
                                    <>
                                        <img style={{width:'200px',marginRight:'20px'}} src={image} alt="" />
                                    </>
                                )
                            })}
                        </>


                    );
                })}
            </div>
        </>
    );
}
        
        
        


export default Fetch