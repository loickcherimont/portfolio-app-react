import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <div className="relative z-10 flex flex-col gap-y-10 bg-gradient-to-b from-blue-950/90 to-indigo-950/90">
        <Header />
        <Home />
        <About />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;