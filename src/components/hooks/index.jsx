import { useContext} from "react";
import { StudensContext } from "../../context"
const Hooks=()=>{
    const [data,setData] = useContext(StudensContext)
    const onDelete = (id)=>{
        let res = data.filter((v)=>v.id!==id)
        setData(res)
    }
    return (
        <>
        <h1>Students {data.length}</h1>
        {data.map((v)=>{
            return(
                <h1 key={v.id}>ID: {v.id} -- Name:{v.name}<button onClick={()=>onDelete(v.id)}>delete</button></h1>
            )
        })}
        </>
    )
}
export default Hooks