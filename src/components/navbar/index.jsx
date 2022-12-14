import React from "react"
import { NavLink, Outlet} from "react-router-dom"
import { Div,P} from "./nb_style"
const Navbar=()=>{
    return(
        <>
        <Div>
            <NavLink to={'/home'}><P>Home</P></NavLink>
            <NavLink to={'/login'}><P>Login</P></NavLink>
            <NavLink to={'/register'}><P>Register</P></NavLink>
            <NavLink to={'/students'}><P>Students</P></NavLink>
        </Div>
        <Outlet/>
        </>
    )
}

export default Navbar