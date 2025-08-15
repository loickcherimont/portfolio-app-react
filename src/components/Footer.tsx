export default function Footer() {
    const getCurrentYear = () => (new Date()).getFullYear();
    return (
        <footer className="border-t mx-5 p-5 flex flex-col items-center">
            <p>&copy; {getCurrentYear()} Loick Cherimont</p>
            <p>All rights reserved.</p>
        </footer>
    )
}