import { useState ,useEffect} from "react";

const List =()=>{
    const [students,setStudents] = useState()
    useEffect(() => {
        fetch('https://houzing-app.herokuapp.com/api/v1/houses/list')
        .then(res=>res.json())
        .then(res=>setStudents(res))
    },[]);
    return(
        <>
        {console.log(students)}
        </>
    )
}
export default List