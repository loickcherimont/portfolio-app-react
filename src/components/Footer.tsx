export default function Footer() {
    const getCurrentYear = () => (new Date()).getFullYear();
    return (
        <footer className="border-t mx-5 p-5 flex justify-center">
            <p>&copy; {getCurrentYear()} Loick Cherimont | All rights reserved.</p> 
        </footer>
    )
}