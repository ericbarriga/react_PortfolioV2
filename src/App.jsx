import Topbar from "./componants/topbar/topbar"
import Contact from "./componants/contact/contact"
import Intro from "./componants/intro/intro"
import Portfolio from "./componants/portfolio/portfolio"
import Testimonials from "./componants/testimonials/testimonials"
import Works from "./componants/works/works"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
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
