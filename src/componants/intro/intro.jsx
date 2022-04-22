import "./intro.scss";

export default function Intro() {
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
                    <h3>jr full stack dev</h3>
                    <h3>and your bitch <span></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow2.png" alt="" />
                </a>
            </div>
        </div>
    )
}