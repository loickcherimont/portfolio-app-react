import { useState } from "react";
import { NavigationMenu } from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { CustomNavigationMenuList } from "./CustomNavigationMenuList";

// TODO: Create a single component to handle mobile and tablet/laptop views 
export default function NavMenu({ menuItems }: { menuItems: string[] }) {
    const [isOpen, setIsOpen] = useState(false);
    return <nav className="flex flex-row-reverse text-slate-300 position">
        {/* Hamburger Menu / Mobile menu */}
        <Button
            className="text-white focus:outline-none m-1 md:hidden bg-violet-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        {isOpen && <NavigationMenu data-testid="mobile-menu" className="mt-15 -me-15 shadow-xl shadow-black rounded-xl">

            <CustomNavigationMenuList className="flex flex-col bg-slate-950 rounded-md" menuItems={menuItems} setIsOpen={setIsOpen} />
        </NavigationMenu>}
        {/* **************************** */}

        {/* Tablets, laptops and desktops */}
        <NavigationMenu className="hidden md:block">
            <CustomNavigationMenuList className="space-x-5 flex flex-col md:flex-row" menuItems={menuItems} setIsOpen={setIsOpen} />
        </NavigationMenu>
    </nav>
}
