import { useRef } from "react"

const Login =()=>{
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const onLogin = ()=>{
        fetch('https://houzing-app.herokuapp.com/api/public/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:emailRef.current.value,
                password:passwordRef.current.value,
            })
        })
    }
    return(
        <>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={onLogin}>login</button>
        </>
    )
}
export default Login