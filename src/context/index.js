import { useState,createContext} from "react"
export const StudensContext = createContext()
const StudentsList = ({children})=>{
    const [students,setStudents] = useState([
        {id:1,name:'Umar'},
    {id:2,name:'Umar'},
    {id:3,name:'Umar'},
    {id:4,name:'Umar'},
    {id:5,name:'Umar'},
    {id:6,name:'Umar'},
    {id:7,name:'Umar'},
    {id:8,name:'Umar'},
    {id:9,name:'Umar'},
    {id:10,name:'Umar'},
    {id:11,name:'Umar'}])
    return(
        <StudensContext.Provider value={[students,setStudents]}>{children}</StudensContext.Provider>
    )
}

export default StudentsList