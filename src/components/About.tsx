export default function About() {
    return <div id="about" className="min-h-screen flex flex-col items-center my-10 text-slate-300">
        <h2 className="border-b p-3 text-3xl font-semibold text-center">ABOUT</h2>
        <article className="flex flex-col justify-around items-center h-9/10 text-justify mt-30 gap-y-5 text-xl md:leading-10">
            <p className="min-w-60 max-w-1/2">My coding journey started back in high school on a calculator, where I wrote my first small algorithm. Since then, I’ve explored Python and studied web development at the University of Reunion Island, learning HTML, CSS, and <mark className="bg-violet-700 rounded text-white p-1">JavaScript</mark>.</p>

            <p className="min-w-60 max-w-1/2">Since finishing university 6 years ago, this discovery has grown into a true passion. <mark className="bg-violet-700 rounded text-white p-1">Curious and self-driven</mark>, I’ve been learning on my own and building applications with <mark className="bg-violet-700 rounded text-white p-1">Go, TypeScript, and Java</mark>.</p>


            <p className="min-w-60 max-w-1/2">Today, I want to join a company to contribute to <mark className="bg-violet-700 rounded text-white p-1">impactful projects, keep improving myself</mark>, and grow as a <mark className="bg-violet-700 rounded text-white p-1">Fullstack Developer</mark>.</p>
        </article>
    </div>
}