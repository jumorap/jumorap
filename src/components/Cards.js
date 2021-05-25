import React from "react"
import { FaArrowRight } from "react-icons/all";
import Fade from "react-reveal/Fade";


export default function Cards({ fTitle, fContent, fImg, fImgWidth, fUrl, fAltCase, sTitle, sContent, sImg, sImgWidth, sUrl, sAltCase }) {

    function littleCard(title, content, img, imgWidth, url, altCase) {
        let utilTitle = title.toLowerCase().replace(/ /g, "")

        return (
            <div className={"second-land summary-land"}>
                <div className={"in-card text-card"}>
                    <a href={url}
                       className={"learn-more"}
                       target={"_blank"}
                       rel={"noreferrer"}
                       aria-label={utilTitle}
                       title={title}
                    >
                    <h2 className={"title-card"}>
                        {title}
                    </h2>
                        Learn more&nbsp;&nbsp;
                        <FaArrowRight style={{fontSize: "10px"}}/>
                    </a><p/>
                    {content}
                </div>
                <div className={"in-card image-card"}>
                    <img src={img} style={{width: imgWidth}} alt={altCase}/>
                </div>
            </div>
        )
    }

    return (
        <div className={"summary-container"}>
            <Fade left>
                {littleCard(fTitle, fContent, fImg, fImgWidth, fUrl, fAltCase)}
            </Fade>
            <Fade right>
                {littleCard(sTitle, sContent, sImg, sImgWidth, sUrl, sAltCase)}
            </Fade>
        </div>
    )
}

