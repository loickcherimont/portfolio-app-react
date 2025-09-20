// import { Button } from "./ui/button";
import developerPortrait from "../../../public/developer-portrait.png";
import './index.css';


export default function Home() {
    // const handleGetCv = () => {
    //     // TODO: Store CV
    //     alert("CV downloaded")
    // }
    return <div id="home" className="min-h-screen">
        <div className="flex flex-col items-center justify-around">
            {/* PHOTO */}
            {/* Title */}
            {/* Position */}
            <div className="flex flex-col items-center gap-y-5 mt-5">
                {/* <img src={developerPortrait} alt="Developer's photo" className="rounded-full mask-b-from-50% w-96" /> */}
                <div className="cosmic-photo-container">
                    {/* <!-- Anneaux cosmiques --> */}
                    <div className="cosmic-ring"></div>
                    <div className="cosmic-ring"></div>
                    <div className="cosmic-ring"></div>

                    {/* <!-- Particules cosmiques --> */}
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>
                    <div className="cosmic-particle"></div>

                    {/* <!-- Photo avec effet cosmique --> */}
                    <img src={developerPortrait} alt="Developer's photo" className="cosmic-photo" />
                </div>


                <h2 className="border-b pb-2 text-2xl font-semibold ">Loick CHERIMONT</h2>
                <p className="text-xl animate-pulse">Java Fullstack Developer</p>
            </div>

            {/* BUTTONS */}
            {/* Hire me */}
            {/* CV */}
            <div className="flex flex-col mt-5 md:flex-row">
                <a href="#contact" className="w-32 text-center py-1.5 rounded-md transition ease-in duration-300 border-3 border-violet-700 hover:bg-violet-700 hover:shadow-violet-700/50 shadow-xl text-white">Hire me</a>
                {/* <Button className="w-32 cursor-pointer" onClick={handleGetCv}>Get my CV</Button> */}

                {/* block px-4 py-2  hover:shadow-lg hover:bg-violet-500 hover:shadow-violet-700 rounded transition duration-300 hover:text-white */}
            </div>
        </div>
    </div>
}