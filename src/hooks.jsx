import { useRef, useState } from "react"
const Hooks=()=>{
    const [input,setInput] = useState('')
    const [change,setChange] = useState('')
    const inputRef = useRef('')
    const save=()=>{
        setInput(inputRef.current.value)
        console.log('Render useRef')
    }
    const onChange=(e)=>{
        setChange(e.target.value)
        console.log('Render onChange');
    }
    return (
        <>
        <h1>useRef: {input}</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={save}>click</button>
        <hr/>
        <h1>onChange: {change}</h1>
        <input type="text" onChange={onChange}/>
        </>
    )
}
export default Hooks