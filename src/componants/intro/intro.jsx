import "./intro.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ["react", "graphql", "mongodb", "javascript", "html", "css", "sql",]
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/IMG_4363.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there I'm</h2>
                    <h1>Eric Barriga</h1>
                    <h3>jr. fullstack dev <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow2.png" alt="" />
                </a>
            </div>
        </div>
    )
}