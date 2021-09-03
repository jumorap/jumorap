import React from "react"
import Fade from "react-reveal/Fade";


export default function AboutAndContact({idSection, title, subTitle, component, specificStyle}){

    function subAbout(subTitle) {
        return (
            <div className={"summary-container"}>
                <ul className={"ul-formatted-start"}>
                    <li className={"text-about"}>
                        {subTitle}
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Fade bottom>
            <section id={idSection} className={`last-areas`}>
                <div className={"little-bg-text"}>
                    <div className={"title-last-card"}>
                        {title}
                    </div>
                    <div className={`${specificStyle} sub-last-card`}>
                        {subAbout(subTitle)}
                        {component}
                    </div>
                </div>
            </section>
        </Fade>
    )
}

