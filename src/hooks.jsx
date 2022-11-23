import React  from "react"
import {useState,useEffect} from "react"
function Hooks(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('dang')
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        </>
    )
}
export default Hooks;