import React from "react"
import Cards from "./Cards";
import salieri from "../assets/salieri.png";
import redboard from "../assets/redBoardLogo.png";
import healthHistory from "../assets/upapp.png";
import gameOfLife from "../assets/gameOfLife.png";
import linusTorvalds from "../assets/linusTorvalds.png"

export default function CardsCollection() {
    return (
        <>
            <Cards
                fTitle={"SalieriUN"}
                fContent={"Mobile Android app that help students through NLP to locate classrooms and buildings in UN Colombia. Performs different tasks such as alarm, app manager and works without Internet."}
                fImg={salieri}
                fImgWidth={"90%"}
                fUrl={"https://github.com/jumorap/SalieriUN"}
                sTitle={"Red Board"}
                sContent={"With a teamwork of 7 engineering students, we built a web to share class notes within the University students. In first place, to Students from National University of Colombia."}
                sImg={redboard}
                sImgWidth={"70%"}
                sUrl={"https://github.com/jumorap/red-board"}
            />
            <Cards
                fTitle={"My Face"}
                fContent={"Send an e-mail to master user with the photograph and name of who appears in front of the camera, and further use TTS with a personalized message for each user."}
                fImg={linusTorvalds}
                fImgWidth={"90%"}
                fUrl={"https://github.com/jumorap/face_recog_prj"}
                sTitle={"Game of Life"}
                sContent={"\"Game\" built in Python, based in Game of Life that works with Cellular Automatas, in memory to John Conways."}
                sImg={gameOfLife}
                sImgWidth={"80%"}
                sUrl={"https://github.com/jumorap/Game_of_life_cellular_automata_john_conways"}
            />
            <Cards
                fTitle={"Health & History"}
                fContent={"Mobile Android app to manage and share our health activity. Where going to be saved every our medical record by health professionals."}
                fImg={healthHistory}
                fImgWidth={"90%"}
                fUrl={"https://github.com/jumorap/HealthHistory"}
                sTitle={""}
                sContent={"COMPLETAR"}
                sImg={""}
                sImgWidth={"70%"}
                sUrl={""}
            />
        </>
    )
}