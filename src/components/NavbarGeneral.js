import React from "react"
import "../css/navbar.css"
import { FaGithubAlt, FaHamburger, FaHome } from "react-icons/fa"
import { GrMail } from "react-icons/all"


export default function NavbarGeneral() {
    return (
        <>
            <div className={"general-nav bar-features"}>
                <ul className={"ul-header"}>
                    <li className={"hamburger-menu specs-icons"}>
                        <FaHamburger/>
                    </li>
                    <a href={"/#home"}>
                    <li className={"home specs-icons"}>
                        <FaHome/>
                    </li>
                    </a>
                    <a href={"https://github.com/jumorap"} target={"_blank"}>
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
        </>
    )
}

