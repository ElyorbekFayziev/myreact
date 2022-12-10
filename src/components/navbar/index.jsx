import React from "react"
import { NavLink, Outlet} from "react-router-dom"
import { Div} from "./nb_style"
const Navbar=()=>{
    return(
        <>
        <Div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/service'}>Service</NavLink>
            <NavLink to={'/students'}>Students</NavLink>
        </Div>
        <Outlet/>
        </>
    )
}

export default Navbar