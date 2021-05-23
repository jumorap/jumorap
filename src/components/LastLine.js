import React from "react"
import AboutAndContact from "./AboutAndContact";
import "../css/lastLine.css"
import {
    CgCPlusPlus, CgOpenCollective,
    DiDart, DiGoogleCloudPlatform, DiHeroku,
    DiJavascript1, DiMysql,
    FaGitAlt, FaGithub,
    FaJava,
    FaPython, FaReact, FaUnity, IoLogoElectron, IoLogoFirebase, RiChromeFill, RiFlutterFill, SiAndroidstudio, SiBlender,
    SiCsharp, SiDebian, SiDjango,
    SiKotlin,
    SiMathworks
} from "react-icons/all";


export default function LastLine() {

    const aboutDef = "Colombian, TI manager with more than 3 years of experience in projects where CI/CD model was implemented. Android developer over different technologies as Kotlin, Flutter, Java, React Native, freelancer as BOT developer and web data miner. Undergraduate of Computer and Systems Engineer and eternal student of life."
    const listForProgrammingTable = [
        {logo: <FaPython/>, languagePro: "Python", timePro: "4 years"},
        {logo: <FaJava/>, languagePro: "Java", timePro: "5 years"},
        {logo: <DiJavascript1/>, languagePro: "JavaScript", timePro: "3 years"},
        {logo: <CgCPlusPlus/>, languagePro: "C / C++", timePro: "2 years"},
        {logo: <SiKotlin/>, languagePro: "Kotlin", timePro: "1 year"},
        {logo: <DiDart/>, languagePro: "Dart", timePro: "1 year"},
        {logo: <SiMathworks/>, languagePro: "MATLB", timePro: "1 year"},
        {logo: <SiCsharp/>, languagePro: "C#", timePro: "8 months"},
    ]

    const listForTechTable = [
        {logo: <FaGitAlt/>, tech: "Git"},
        {logo: <FaGithub/>, tech: "GitHub"},
        {logo: <SiAndroidstudio/>, tech: "Android Studio"},
        {logo: <RiFlutterFill/>, tech: "Flutter"},
        {logo: <FaReact/>, tech: "React JS"},
        {logo: <IoLogoElectron/>, tech: "Electron"},
        {logo: <SiDjango/>, tech: "Django"},
        {logo: <IoLogoFirebase/>, tech: "Firebase"},
        {logo: <DiGoogleCloudPlatform/>, tech: "Google Cloud"},
        {logo: <DiHeroku/>, tech: "Heroku"},
        {logo: <CgOpenCollective/>, tech: "OpenCV"},
        {logo: <DiMysql/>, tech: "MySQL"},
        {logo: <RiChromeFill/>, tech: "Selenium"},
        {logo: <SiDebian/>, tech: "Linux"},
        {logo: <FaUnity/>, tech: "Unity"},
        {logo: <SiBlender/>, tech: "Blender"},
    ]

    function cardsOfTablesContainer(idSection, title, func) {
        return (
            <section id={idSection} className={"last-areas"}>
                <div className={"skills-card little-bg-text"}>
                    <ul className={"ul-formatted-start"}>
                        <li>
                            <h3>{title}</h3>
                        </li>
                        <li>{func}</li>
                    </ul>
                </div>
            </section>
        )
    }

    function languagesTable() {
        return (
            <table className={"programming-languages-table"}>
                <tr className={"table-titles"}>
                    <td>Language</td>
                    <td>Time</td>
                </tr>
                {listForProgrammingTable.map((programming) => (
                    <tr className={"row-table"}>
                        <td className={"column-languages"}>
                            <span className={"language-logo"}>
                                {programming.logo}
                            </span>&nbsp;&nbsp;
                            {programming.languagePro}
                        </td>
                        <td className={"column-time"}>
                            {programming.timePro}
                        </td>
                    </tr>
                ))}
            </table>
        )
    }

    function techTable() {
        return (
            <table className={"programming-languages-table"}>
                <tr className={"table-titles"}>
                    <td>Technologies</td>
                </tr>
                {listForTechTable.map((programming) => (
                    <tr className={"row-table"}>
                        <td className={"column-languages"}>
                            <span className={"language-logo"}>
                                {programming.logo}
                            </span>&nbsp;&nbsp;
                            {programming.tech}
                        </td>
                    </tr>
                ))}
            </table>
        )
    }

    return (
        <div className={"last-general-container"}>
            <div className={"little-last-general-container l-l-g-c-left"}>
                {cardsOfTablesContainer("languages", "Programming Languages", languagesTable())}
                {cardsOfTablesContainer("tech", "Technologies", techTable())}
            </div>
            <div className={"little-last-general-container l-l-g-c-right"}>
                <AboutAndContact idSection={"about"} title={"About Me"} subTitle={aboutDef}/>
                <AboutAndContact idSection={"contact"} title={"Contact Me"} subTitle={aboutDef}/>
            </div>
        </div>
    )
}

