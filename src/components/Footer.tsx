import { getCurrentYear } from "@/lib/utils";

export default function Footer() {
    return (
        <footer className="mx-5 p-5 flex flex-col items-center lg:text-lg">
            <p>&copy; {getCurrentYear()} Loick Cherimont</p>
            <p>All rights reserved.</p>
        </footer>
    )
}