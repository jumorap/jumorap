import React from "react"
import "../css/education.css"
import unal from "../assets/unal.png"
import {
    CgMathDivide,
    FaArrowRight,
    FaGraduationCap,
    FaLightbulb, TiLocation
} from "react-icons/all";
import Fade from "react-reveal/Fade";


export default function Education() {

    function completeList(logo, title, def) {
        return (
            <li>
                <h3>
                    {logo}&nbsp;{title}: &nbsp;
                    <span className={"def-text"}>
                        {def}
                    </span>
                </h3>
            </li>
        )
    }

    function relevantCoursework() {

        const coursework = [
            {programme: "Data Structures"},
            {programme: "OOP"},
            {programme: "Calculus (I, II, III)"},
            {programme: "Discrete Math (I, II)"},
            {programme: "Data Base System (SQL, NoSQL)"},
            {programme: "Linear Algebra"},
            {programme: "Probability Theory"},
            {programme: "Numerical Methods"},
            {programme: "Theory of Computation"},
            {programme: "Software Engineering"},
        ]

        return (
            <span className={"list-with-rows"}>
                {coursework.map((signature) => (
                    <p>
                        <FaArrowRight style={{fontSize: "12px"}}/> {signature.programme}
                    </p>
                ))}
            </span>
        )
    }

    return (
        <div className={"summary-container summary-container-education"}>
            <Fade bottom>
                <div className={"summary-land education-land"}>
                    <ul>
                        <li>
                            <h1>
                                B.S. Computer and Systems Engineer
                            </h1>
                        </li>
                        <li>
                            <h2>
                                <span style={{fontSize: "28px"}}>
                                    <TiLocation/>&nbsp;
                                </span>
                                National University of Colombia, Bogotá
                            </h2>
                        </li>
                        <br/>
                        {completeList(<FaGraduationCap/>,"Anticipated Graduation","DEC. 2023")}
                        {completeList(<CgMathDivide/>, "GPA","4,3 / 5,0")}
                        <h3><FaLightbulb/>&nbsp;Relevant Coursework:</h3>
                        {relevantCoursework()}

                    </ul>
                </div>
            </Fade>
            <Fade right>
                <div className={"education-land-right summary-land"} >
                    <ul className={"ul-formatted"}>
                        <li>
                            <img src={unal} className={"unal-logo"} alt={""}/>
                        </li>
                        <li>
                            <p/>
                            <span className={"subtitle"}>
                                National University of Colombia
                            </span>
                        </li>
                    </ul>
                </div>
            </Fade>
        </div>
    )
}

