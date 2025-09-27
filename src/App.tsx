import Home from "./components/Home/Home";
import Achievements from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <div className="relative min-h-screen text-slate-300">
      <StarryBackground />
      <div className="relative z-10 flex flex-col gap-y-10 bg-transparent">
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