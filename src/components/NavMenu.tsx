import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export default function NavMenu({ menuItems }: { menuItems: string[] }) {
    return <div>
        <NavigationMenu>
            <NavigationMenuList className="space-x-5">
                {menuItems.map((item, index) =>
                    <NavigationMenuItem key={index} >
                        <NavigationMenuLink href={`#${item}`} className="hover:bg-slate-300">{item.toUpperCase()}</NavigationMenuLink>
                    </NavigationMenuItem>)}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
}