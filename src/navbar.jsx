import React,{memo} from "react"
// import {Hooks} from "./hooks"
import { Div, P } from "./nb_style"
const Navbar=(props)=>{

    return(
        <Div>
            <P>Home</P>
            <P>About</P>
            <P>Service</P>
            <P>Students {props.data2}</P>
        </Div>
    )
}

export default memo(Navbar)