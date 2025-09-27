import { NavLink } from "react-router";
import StarryBackground from "./StarryBackground";

export default function Error() {
    return (
        <div className="relative min-h-screen text-slate-300">
            <StarryBackground />
            {/* Content above */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold">Error 404</h1>
                <p>
                    This path doesn't exist, use instead <NavLink to="/portfolio" end className="text-blue-400 underline">this link for root</NavLink>.
                </p>
            </div>
        </div>
    )
}