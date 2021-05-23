import React from "react"
import "../css/main.css"
import NavbarGeneral from "../components/NavbarGeneral"
import CardsCollection from "../components/CardsCollection"
import Education from "../components/Education"
import AboutAndContact from "../components/AboutAndContact";
import LastLine from "../components/LastLine";


export default function Main() {
    return (
        <>
            <NavbarGeneral/>

            <div className={"general"}/>
            <section id={"home"} className={"principal-land"}>
                <div className={"bg-text"}>
                    <h1>I am Juan Mora</h1>
                    <h4>And I'm a Developer</h4>
                </div>
            </section>

            <section id={"projects"} className={"projects-cards cards-container"}>
                <h1>
                    Relevant Projects
                </h1>
                <CardsCollection/>
            </section>

            <section id={"education"} className={"education-cards cards-container"}>
                <h1>
                    Education
                </h1>
                <Education/>
            </section>

            <LastLine/>

            <div className={"principal-land"}>
            </div>
        </>
    )
}

