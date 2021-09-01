import React from "react"
import Cards from "./Cards";
import salieri from "../assets/salieri.png";
import redboard from "../assets/redBoardLogo.png";
import healthHistory from "../assets/upapp.png";
import gameOfLife from "../assets/gameOfLife.png";
import linusTorvalds from "../assets/linusTorvalds.webp"
import opera from "../assets/opera.png"


export default function CardsCollection() {
    return (
        <>
            <Cards
                fTitle={"SalieriUN"}
                fContent={"Mobile Android app that helps students through NLP to locate classrooms and buildings in UN Colombia. It performs different tasks such as alarm, app manager, works without an internet connection."}
                fImg={salieri}
                fImgWidth={"90%"}
                fUrl={"https://github.com/jumorap/SalieriUN"}
                fAltCase={"personal assistant salieriun mobile android app project"}
                sTitle={"Red Board"}
                sContent={"With a teamwork of 7 engineering students, we built a web to share class notes with the University students. In first place, to Students from National University of Colombia with 54k+ users."}
                sImg={redboard}
                sImgWidth={"70%"}
                sUrl={"https://redboardun.com"}
                sAltCase={"red-board (redboard) react js app project"}
            />
            <Cards
                fTitle={"My Face"}
                fContent={"(Open Source) Facial recognition & security: When somebody appears in the PC camera, it will send an email to the master user with the credentials of that person. Further, use TTS with messages for each user."}
                fImg={linusTorvalds}
                fImgWidth={"90%"}
                fUrl={"https://github.com/jumorap/face_recog_prj"}
                fAltCase={"my face facial recognition and security project in python"}
                sTitle={"Game of Life"}
                sContent={"A \"game\" built in Python, based in Game of Life that works with Cellular Automatas. In memory of John Conways."}
                sImg={gameOfLife}
                sImgWidth={"80%"}
                sUrl={"https://github.com/jumorap/Game_of_life_cellular_automata_john_conways"}
                sAltCase={"game of life in python with cellular automatas"}
            />
            <Cards
                fTitle={"Health & History"}
                fContent={"Mobile Android app to manage and share our health activity. Where is saved every medical record by health professionals."}
                fImg={healthHistory}
                fImgWidth={"90%"}
                fUrl={"https://github.com/jumorap/HealthHistory"}
                fAltCase={"mobile android app to help people with their medical record"}
                sTitle={"Opera Extension Generator"}
                sContent={"(Open Source) With a singles input, generates an Opera sidebar extension, rendering a webpage that the user requires."}
                sImg={opera}
                sImgWidth={"80%"}
                sUrl={"https://github.com/jumorap/opera-extension-generator"}
                sAltCase={"tool to create opera extensions with a singles input"}
            />
        </>
    )
}
