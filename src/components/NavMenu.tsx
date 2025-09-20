import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

// TODO: Create a single component to handle mobile and tablet/laptop views 
export default function NavMenu({ menuItems }: { menuItems: string[] }) {
    const [isOpen, setIsOpen] = useState(false);
    return <nav className="flex flex-row-reverse text-slate-300 position absolute">
        {/* Hamburger Menu / Mobile menu */}
        <Button
            className="text-slate-300 focus:outline-none m-1 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        {isOpen && <NavigationMenu data-testid="mobile-menu">
            <NavigationMenuList className="space-x-5 flex flex-col bg-slate-950 rounded-md">
                {menuItems.map((item, index) =>
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink href={`#${item.toLowerCase()}`} className="block px-4 py-2 hover:bg-slate-200 rounded" onClick={() => setIsOpen(false)}>{item.toUpperCase()}</NavigationMenuLink>
                    </NavigationMenuItem>)}
            </NavigationMenuList>
        </NavigationMenu>}
        {/* **************************** */}

        {/* Tablets, laptops and desktops */}
        <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="space-x-5 flex flex-col md:flex-row">
                {menuItems.map((item, index) =>
                    <NavigationMenuItem key={index} >
                        <NavigationMenuLink href={`#${item.toLowerCase()}`} className="block px-4 py-2 hover:shadow-lg hover:bg-violet-700 hover:shadow-violet-700 rounded transition duration-300 hover:text-white" onClick={() => setIsOpen(false)}>{item.toUpperCase()}</NavigationMenuLink>
                    </NavigationMenuItem>)}
            </NavigationMenuList>
        </NavigationMenu>
    </nav>
}
