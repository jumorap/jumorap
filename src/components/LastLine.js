import React from "react"
import AboutAndContact from "./AboutAndContact";
import "../css/lastLine.css"
import {
    CgCPlusPlus,
    CgOpenCollective,
    DiDart,
    DiGoogleCloudPlatform,
    DiHeroku,
    DiJavascript1,
    DiMysql, FaArrowRight, FaDiscord,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPython,
    FaReact,
    FaUnity,
    IoLanguageSharp,
    IoLogoElectron,
    IoLogoFirebase,
    RiChromeFill,
    RiFlutterFill,
    SiAndroidstudio,
    SiBlender,
    SiCsharp,
    SiDebian,
    SiDjango, SiGmail,
    SiGo,
    SiKotlin,
    SiMathworks,
    SiSkillshare
} from "react-icons/all";
import Fade from "react-reveal/Fade";


export default function LastLine() {

    const aboutDef = "Colombian, TI manager with more than 3 years of experience in projects where CI/CD model was implemented. Android developer over different technologies as Kotlin, Flutter, Java & React Native; website developer in React JS & DJango; freelancer as Discord & Twitch BOT developer and web data miner. Undergraduate of Computer and Systems Engineer and eternal student of life."
    const listForProgrammingTable = [
        {logo: <FaPython/>, languagePro: "Python", timePro: "4 years"},
        {logo: <FaJava/>, languagePro: "Java", timePro: "5 years"},
        {logo: <DiJavascript1/>, languagePro: "JavaScript", timePro: "3 years"},
        {logo: <CgCPlusPlus/>, languagePro: "C / C++", timePro: "2 years"},
        {logo: <SiKotlin/>, languagePro: "Kotlin", timePro: "1 year"},
        {logo: <DiDart/>, languagePro: "Dart", timePro: "1 year"},
        {logo: <SiMathworks/>, languagePro: "MATLB", timePro: "1 year"},
        {logo: <SiCsharp/>, languagePro: "C#", timePro: "8 months"},
        {logo: <SiGo/>, languagePro: "Golang", timePro: "6 months"},
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
            <Fade left>
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
            </Fade>
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

    function listComplementAbout(logo, subtitle, text) {
        return (
            <>
                <div className={"subtitle-about"}>
                    <h4>
                        <span className={"language-logo"}>
                            {logo}&nbsp;&nbsp;
                        </span>
                        {subtitle}
                    </h4>
                </div>

                <p>{text}</p>
            </>
        )
    }

    function getListComplementAbout() {

        const listSoftSkills = [
            {programme: "Clear communication"},
            {programme: "Empathy"},
            {programme: "Teamwork"},
            {programme: "Adaptability"},
            {programme: "Creativity"},
            {programme: "Problem solving"},
        ]

        const listLanguagesSpoken = [
            {language: "Spanish (Native Language)"},
            {language: "English (70%)"},
            {language: "French (20%)"},
        ]

        const softSkills = (
            <span className={"list-with-rows"}>
                {listSoftSkills.map((signature) => (
                    <p>
                        <FaArrowRight style={{fontSize: "12px"}}/> {signature.programme}
                    </p>
                ))}
            </span>
        )

        const languagesSpoken = (
            <span className={"list-with-rows"}>
                {listLanguagesSpoken.map((signature) => (
                    <p>
                        <FaArrowRight style={{fontSize: "12px"}}/> {signature.language}
                    </p>
                ))}
            </span>
        )

        return (
            <div className={"container-all-complements-about"}>
                <div className={"container-complements-about"}>
                    {listComplementAbout(<SiSkillshare/>, "Soft Skills", softSkills)}
                </div>
                <div className={"container-complements-about"}>
                    {listComplementAbout(<IoLanguageSharp/>, "Languages Spoken", languagesSpoken)}
                </div>
            </div>
        )
    }

    function listComplementContact(logo, title, subtitle, link, refLink) {
        return (
            <>
                <div className={"central-ref"}>
                    <span className={"central-ref-logo"}>
                        {logo}
                    </span>
                    <div className={"contact-for-each"}>
                        <b>{title}</b>
                        <span className={"options-list"}>{subtitle}</span>
                        <a href={link}>{refLink}</a>
                    </div>
                </div>
            </>
        )
    }

    function getListComplementContact() {
        return (
            <>
                {listComplementContact(
                    <SiGmail/>,
                    "Via e-mail",
                    "jumorap@unal.edu.co",
                    "mailto:jumorap@unal.edu.co",
                    "Send e-mail")}
                {listComplementContact(
                    <FaDiscord/>,
                    "Via Discord",
                    "Jumorap#8334",
                    "https://discord.com/app",
                    "Go to Discord")}
                {listComplementContact(
                    <FaGithub/>,
                    "Follow my repositories",
                    "github.com/jumorap",
                    "https://github.com/jumorap",
                    "Go to Github")}
            </>
        )
    }

    return (
        <section id={"about"} className={"last-general-container"}>
            <div className={"little-last-general-container l-l-g-c-left"}>
                {cardsOfTablesContainer("languages", "Programming Languages", languagesTable())}
                {cardsOfTablesContainer("tech", "Technologies", techTable())}
            </div>
            <div className={"little-last-general-container l-l-g-c-right"}>
                <AboutAndContact idSection={""} title={"About Me"} subTitle={aboutDef} component={getListComplementAbout()} />
                <AboutAndContact idSection={"contact"} title={"Contact Me"} component={getListComplementContact()} specificStyle={"contact-me-card"}/>
            </div>
        </section>
    )
}

