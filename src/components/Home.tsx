import { Button } from "./ui/button";


export default function Home() {
    const handleGetCv = () => {
        // TODO: Store CV
        alert("CV downloaded")
    }
    return <div id="home">
        <div className="flex flex-col h-9/10 items-center justify-around">
            {/* PHOTO */}
            {/* Title */}
            {/* Position */}
            <div className="flex flex-col items-center space-y-3 mt-5">
                <img src="https://placehold.co/300" alt="Developer's photo" className="rounded-lg" />
                <h2 className="border-b pb-2 text-3xl font-semibold">Loick CHERIMONT</h2>
                <p className="leading-7">Spring/TypeScript Developer</p>
            </div>

            {/* BUTTONS */}
            {/* Hire me */}
            {/* CV */}
            <div className="flex flex-col space-y-5 md:flex-row md: space-x-5">
                <a href="#contact" className="w-32 bg-slate-200 text-center py-1.5 rounded-md transition ease-in duration-300 hover:bg-slate-300">Hire me</a>
                <Button className="w-32 cursor-pointer" onClick={handleGetCv}>Get my CV</Button>
            </div>
        </div>
    </div>
}