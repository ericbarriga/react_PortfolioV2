import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#intro">home</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#works">skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#testimonials">Resume</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    )
}