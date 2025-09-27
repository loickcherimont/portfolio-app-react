import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

interface CustomNavigationMenuListProps {
    className: string;
    menuItems: string[];
    setIsOpen: (isOpen: boolean) => void;
}

export function CustomNavigationMenuList({className, menuItems, setIsOpen}: CustomNavigationMenuListProps) {
    return <NavigationMenuList className={`${className}`}>
                {menuItems.map((item, index) =>
                    <NavigationMenuItem key={index} className="w-full">
                        {/* If HOME is clicked, go to the top of the app */}
                        <NavigationMenuLink href={item === "Home" ? "" : `#${item.toLowerCase()}`} className="px-6 py-3 block hover:shadow-lg hover:bg-violet-700 hover:shadow-violet-700 rounded transition duration-300 hover:text-white md:text-lg md:px-4 md:py-2" onClick={() => setIsOpen(false)}>{item.toUpperCase()}</NavigationMenuLink>
                    </NavigationMenuItem>)}
            </NavigationMenuList>
}