import { NavLink } from "react-router";
import StarryBackground from "./StarryBackground";

export default function Error() {
    return (
        <div className="relative min-h-screen text-slate-300">
            <StarryBackground />
            <h1>Error 404</h1>
            <p>This path doesn't exist, use instead <NavLink to={"/"} end>this link for root</NavLink>.</p>
        </div>
    )
}