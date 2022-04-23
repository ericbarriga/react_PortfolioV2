import { useState } from "react"
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "mobile app",
        },
        {
            id: "design",
            title: "design content",
        },
        {
            id: "content",
            title: "content",
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>portfolio</h1>
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
                <div className="item">
                    <img src="assets/me.jpeg" alt="" width="200" height="200" />
                    <h3>ecommerce</h3>
                </div>
                <div className="item">
                    <img src="assets/me.jpeg" alt="" width="200" height="200" />
                    <h3>ecommerce</h3>
                </div>
                <div className="item">
                    <img src="assets/me.jpeg" alt="" width="200" height="200" />
                    <h3>ecommerce</h3>
                </div>
                <div className="item">
                    <img src="assets/me.jpeg" alt="" width="200" height="200" />
                    <h3>ecommerce</h3>
                </div>
                <div className="item">
                    <img src="assets/me.jpeg" alt="" width="200" height="200" />
                    <h3>ecommerce</h3>
                </div>
            </div>
        </div>
    )
}