import React, { useState } from "react"
import "../css/navbar.css"
import "../css/menu.css"
import { FaGithubAlt, FaHamburger, FaHome } from "react-icons/fa"
import { CgClose, GrMail } from "react-icons/all"


export default function NavbarGeneral() {
    const [open, setOpen] = useState(false);
    const menuOptionsClick = [
        {option: "Home", url: "/#home"},
        {option: "Projects", url: "/#projects"},
        {option: "Education", url: "/#education"},
        {option: "About Me", url: "/#about"},
        {option: "Skills", url: "/#skills"},
        {option: "Contact Me", url: "/#contact"},
    ]

    function menu(specificStyle) {
        return (
            <div className={"menu-container"} style={specificStyle}>
                    {menuOptionsClick.map((signature) => (
                        <a href={signature.url} onClick={() => setOpen(!open)} className={"links-menu-navigation"}>
                            {signature.option}<br/>
                        </a>
                    ))}
            </div>
        )
    }

    return (
        <>
            <div className={"general-nav bar-features"}>
                <ul className={"ul-header"}>
                    <li className={"hamburger-menu specs-icons"}
                        onClick={() => setOpen(!open)}>
                        {!open ? (<FaHamburger/>) : (<CgClose/>)}
                    </li>
                    <a href={"/#home"}>
                    <li className={"home specs-icons"}
                        onClick={() => setOpen(!open)}>
                        <FaHome/>
                    </li>
                    </a>
                    <a href={"https://github.com/jumorap"} target={"_blank"} rel="noreferrer">
                        <li className={"github specs-icons"}>
                            <FaGithubAlt/>
                        </li>
                    </a>
                </ul>
            </div>

            <div className={"contact-bar bar-features"} >
                <a href={"mailto:jumorap@unal.edu.co"} className={"contact-link"}>
                    <span className={"no-sub"}>
                        <GrMail style={{fontSize: "12px"}}/>&nbsp;
                    </span>
                    Contact me
                </a>
            </div>

            {open ? (
                menu()
            ) : (
                menu({top: "-150%", backgroundColor: "rgba(244, 244, 244, 0)"})
            )
            }
        </>
    )
}

