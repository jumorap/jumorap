import React from "react"
import "../css/main.css"
import NavbarGeneral from "../components/NavbarGeneral"
import CardsCollection from "../components/CardsCollection"
import Education from "../components/Education"
import LastLine from "../components/LastLine";
import {FaCode} from "react-icons/all";


export default function Main() {
    return (
        <>
            <NavbarGeneral/>

            <div className={"general"}/>
            <section id={"home"} className={"principal-land"}>
                <main className={"bg-text"}>
                    <h1 className={"name-presentation"}>I'm Juan Mora</h1>
                    <span className={"subtitle-developer"}>And I'm a Developer</span>
                    <FaCode/>
                </main>
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

            <section id={"skills"}>
                <LastLine/>
            </section>

            <div className={"foot-main principal-land"} style={{}}>
                Dimidium facti, qui coepit, habet: sapere aude, incipe
            </div>
        </>
    )
}

