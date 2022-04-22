import "./topbar.scss";
import { LocalPhone, Email } from "@mui/icons-material";


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >RETARD.</a>
                    <div className="itemContainer">
                        <LocalPhone className="icon" />
                        <span>303 549 3545</span>
                    </div>
                    {/*  */}
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>eric@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}