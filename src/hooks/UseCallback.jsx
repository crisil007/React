import React, { useCallback } from "react";
import { useState,useEffect } from "react";


function UseCallback(){
    console.log("componnet render akunnunde")
    const[count,setCount]=useState(0);

    const increment = useCallback(() => { 
        setCount((prevCount)=>prevCount+1)
    },[])
useEffect(()=>{
    console.log("increment function recreated")
},[increment])
    

    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={increment}>Increment</button>
        </>
    )
}
export default UseCallback