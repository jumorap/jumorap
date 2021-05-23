import React from "react"


export default function AboutAndContact({idSection, title, subTitle}){

    function subAbout(subTitle) {
        return (
            <div className={"summary-container"}>
                <ul className={"ul-formatted-start"}>
                    <li>
                        <h4>
                            {subTitle}
                        </h4>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <section id={idSection} className={"last-areas"}>
            <div className={"little-bg-text"}>
                <div className={"title-last-card"}>
                    {title}
                </div>
                <div className={"sub-last-card"}>
                    {subAbout(subTitle)}
                </div>
            </div>
        </section>
    )
}

