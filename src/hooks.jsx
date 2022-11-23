import React from "react"
import { useState} from "react"

const Hooks = () =>{
const [count,setCount] = useState(0)
let [selected,setSelected] = useState(5)
    const onChange =({target:{value}})=>{
        setSelected(selected=value)
        console.log(selected);
    }
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+(+selected))}>{selected}</button>
        <select name="" id="" onChange={onChange}>
            <option value="5" >5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>

        </>
    )
}

export default Hooks