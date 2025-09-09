import NavMenu from "./NavMenu";

export default function Header() {
    return (
        <header className="flex justify-center fixed top-3 right-3 md:static p-3">
            <NavMenu menuItems={["Home", "About", "Projects", "Contact"]} />
        </header>
    )
}