import Topbar from "./componants/topbar/topbar"
import Contact from "./componants/contact/contact"
import Intro from "./componants/intro/intro"
import Portfolio from "./componants/portfolio/portfolio"
import Testimonials from "./componants/testimonials/testimonials"
import Works from "./componants/works/works"
import Menu from "./componants/menu/menu"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
