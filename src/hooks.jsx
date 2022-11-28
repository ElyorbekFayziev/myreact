import Students from "./mock/list";
import { useState,useMemo} from "react";
import Navbar from "./navbar";

const Hooks =()=>{
    const [data,setState] = useState(Students)
    const data2 = useMemo(()=>{
        return data.length
    },[data.length])
    const onDelete = (id)=>{
        let res = data.filter((v)=>v.id!==id)
        setState(res)
    }
    return (
        <>
        <Navbar data2={data2}></Navbar>
        <h1>Students {data.length}</h1>
        {data.map((v)=>{
            return(
                <h1>ID: {v.id} -- Name:{v.name}<button onClick={()=>onDelete(v.id)}>delete</button></h1>
            )
        })}
        </>
    )
}
export default Hooks