import { NavLink } from "react-router";

export default function Error() {
    return (
        <>
            <h1>Error 404</h1>
            <p>This path doesn't exist, use instead <NavLink to={"/"} end>this link for root</NavLink>.</p>
        </>
    )
}