import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="relative flex flex-col gap-y-10">
      <Header />
      <Home />
      <About />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
