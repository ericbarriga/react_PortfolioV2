import "./topbar.scss";
import { LocalPhone, Email } from "@mui/icons-material";


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >BARRIGA.</a>
                    <div className="itemContainer">
                        <LocalPhone className="icon" />
                        <span>303 549 3545</span>
                    </div>
                    {/*  */}
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>ericbarriga007@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger " onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}