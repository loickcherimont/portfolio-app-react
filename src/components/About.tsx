export default function About() {
    return <div id="about" className="min-h-screen flex flex-col items-center my-10 text-slate-300">
        <h2 className="border-b p-3 text-3xl font-semibold text-center">ABOUT</h2>
        <article className="flex flex-col justify-around items-center h-9/10 text-justify mt-30 gap-y-5 text-lg">
            <p className="min-w-60 max-w-1/2">My coding journey started back in high school on a <em className="underline not-italic font-mono">calculator</em>, where I wrote my <em className="underline not-italic font-mono">first small algorithm</em>. Since then, I’ve explored <em className="underline not-italic font-mono">Python</em> and studied <em className="underline not-italic font-mono">web development</em> at the University of Reunion Island, learning <em className="underline not-italic font-mono">HTML, CSS, and JavaScript.</em></p>

            <p className="min-w-60 max-w-1/2">Since finishing university <em className="underline not-italic font-mono">[6 years ago]</em>, this discovery has grown into a <em className="underline not-italic font-mono">true passion</em>. <em className="underline not-italic font-mono">Curious and self-driven</em>, I’ve been <em className="underline not-italic font-mono">learning on my own</em> and building applications with <em className="underline not-italic font-mono">Go, TypeScript, and Java</em>.</p>


            <p className="min-w-60 max-w-1/2">Today, I want to <em className="underline not-italic font-mono">join a company</em> to contribute to <em className="underline not-italic font-mono">impactful projects</em>, <em className="underline not-italic font-mono">keep improving myself</em>, and grow as a <mark className="bg-violet-700 rounded text-white p-1">Fullstack Developer</mark>.</p>
        </article>
    </div>
}