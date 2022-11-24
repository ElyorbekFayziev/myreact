import Students from "./mock/list";
import { useState } from "react";

const Hooks =()=>{
    const [data,setState] = useState(Students)
    return (
        <>
        <h1>Students {data.length}</h1>
        {data.map((v)=>{
            return(
                <h1>ID: {v.id} -- Name:{v.name}</h1>
            )
        })}
        </>
    )
}
export default Hook