import { useState, useEffect } from "react"
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import {
    EPortfolio,
    BookSearch,
    weatherApp
} from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Ecommerce",
        },
        {
            id: "book",
            title: "Book Search",
        },
        {
            id: "weather",
            title: "Weather App",
        },


    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(EPortfolio)
                break;
            case "book":
                setData(BookSearch)
                break;
            case "weather":
                setData(weatherApp)
                break;
            default:
                setData(EPortfolio)
        }

    }, [selected])

    // 
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />

                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}