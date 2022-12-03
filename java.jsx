import React, { useState, createRef } from "react";
function A(){
const [input, setInput] = useState('kamoliddin')
const onChange = (event) => {
setInput (event. target. value)
}
const inputR = createRef()
console.log("render")
return (
<div>
<h1 > NAME {input}</h1>
<input type="text" ref={inputR} onChange={onChange}/>
</div>
)
}
export default A