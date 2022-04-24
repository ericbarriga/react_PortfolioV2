import "./works.scss";
import { useState } from "react"


export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)


    const data = [
        {
            id: "1",
            icon: "assets/arrow2.png",
            title: "graphql",
            desc: "a query language",
            img: "assets/IMG_1612.JPG",
        },
        {
            id: "2",
            icon: "assets/arrow2.png",
            title: "mongodb",
            desc: "database ",
            img: "assets/IMG_1612.JPG",
        },
        {
            id: "3",
            icon: "assets/arrow2.png",
            title: "react",
            desc: "happy hacking",
            img: "assets/IMG_1612.JPG",
        },
    ];


    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imageContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src="assets/IMG_1612.JPG" alt="" />
                            </div>
                        </div>

                    </div>))}
            </div>
            <img src="assets/left_arrow.png"
                className="arrow left"
                id="left"
                alt="something"
                onClick={() => handleClick("left")}
            />
            <img src="assets/left_arrow.png"
                className="arrow right"
                alt="something"
                onClick={() => handleClick()}
            />
        </div>
    )
}