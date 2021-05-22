import React from "react"
import { FaArrowRight } from "react-icons/all";
import Fade from "react-reveal/Fade";


export default function Cards({ fTitle, fContent, fImg, fImgWidth, fUrl, sTitle, sContent, sImg, sImgWidth, sUrl }) {

    function littleCard(title, content, img, imgWidth, url) {
        return (
            <div className={"second-land summary-land"}>
                <div className={"in-card text-card"}>
                    <h2 className={"title-card"}>
                        {title}
                    </h2>
                    <a className={"learn-more"} href={url} target={"_blank"}>
                        Learn more &nbsp;
                        <FaArrowRight style={{fontSize: "10px"}}/>
                    </a><p/>
                    {content}
                </div>
                <div className={"in-card image-card"}>
                    <img src={img} style={{width: imgWidth}} alt={""}/>
                </div>
            </div>
        )
    }

    return (
        <div className={"summary-container"}>
            <Fade left>
                {littleCard(fTitle, fContent, fImg, fImgWidth, fUrl)}
            </Fade>
            <Fade right>
                {littleCard(sTitle, sContent, sImg, sImgWidth, sUrl)}
            </Fade>
        </div>
    )
}

