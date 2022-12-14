import { useRef } from "react"

const Register = ()=>{
    const emailRef = useRef('')
    const nameRef = useRef('')
    const surnameRef = useRef('')
    const passwordRef = useRef('')
    const onRegister=()=>{
        fetch('https://houzing-app.herokuapp.com/api/public/auth/register',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:emailRef.current.value,
                firstname:nameRef.current.value,
                lastname:surnameRef.current.value,
                password:passwordRef.current.value,
                roleIdSet: [1]
            })
        })

    }

    return(
        <>
        <input placeholder="email" ref={emailRef} type="email" />
        <input placeholder="firstname" ref={nameRef} type="text" />
        <input placeholder="lastname" ref={surnameRef} type="text" />
        <input placeholder="password" ref={passwordRef} type="password" />
        <button onClick={onRegister}>Register</button>
        </>
    )
}
export default Register