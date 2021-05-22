import React from "react"
import "../css/education.css"
import unal from "../assets/unal.png"
import {FaArrowRight} from "react-icons/all";


export default function Education() {

    function completeList(title, def) {
        return (
            <li>
                <h3>
                    {title}: &nbsp;
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
            <span style={{paddingLeft: "30px", display: "block"}}>
                {coursework.map((signature) => (
                    <p>
                        <FaArrowRight style={{fontSize: "10px"}}/> {signature.programme}
                    </p>
                ))}
            </span>
        )
    }

    return (
        <div className={"summary-container"}>
            <div className={"summary-land education-land"}>
                <ul>
                    <li>
                        <h2>
                            B.S. Computer and Systems Engineer
                        </h2>
                    </li>
                    {completeList("Anticipated Graduation","DEC. 2023")}
                    {completeList("GPA","4,3 / 5,0")}
                    <h3>Relevant Coursework:</h3>
                    {relevantCoursework()}

                </ul>
            </div>

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

        </div>
    )
}

