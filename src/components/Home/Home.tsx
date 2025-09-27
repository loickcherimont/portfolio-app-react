import developerPortrait from "../../../public/developer-portrait.png";
import './index.css';


export default function Home() {

    return <div id="home" className="min-h-screen">
        <div className="flex flex-col items-center justify-around min-h-screen">
            {/* PHOTO */}
            {/* Title */}
            {/* Position */}
            <div className="flex flex-col items-center gap-y-5 mt-5">
                <div className="cosmic-photo-container">
                    {/* <!-- Cosmic rings --> */}
                    <div className="cosmic-ring"></div>
                    <div className="cosmic-ring"></div>
                    <div className="cosmic-ring"></div>

                    {/* <!-- Cosmic particles --> */}
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>

                    {/* <!-- Picture with cosmic effect --> */}
                    <img src={developerPortrait} alt="Developer's photo" className="cosmic-photo" />
                </div>


                <h2 className="border-b pb-2 font-semibold text-2xl">Loick CHERIMONT</h2>
                <p className="animate-pulse text-xl md:text-3xl ">Java Fullstack Developer</p>
            </div>
            
            {/* Hire me btn */}
            <div className="flex flex-col mt-5 md:flex-row">
                <a href="#contact" className="w-32 text-center py-1.5 rounded-md transition ease-in duration-300 border-3 border-violet-700 hover:bg-violet-700 hover:shadow-violet-700/50 shadow-xl text-white md:text-lg">Hire me</a>
            </div>
        </div>
    </div>
}