"use client" //research around that
// react server component allow you to write UI that can be rendered and optionallly cached on the server.l
import { usePathname } from "next/navigation"
import { NavButton } from "@/components/nav-button";
const routes = [

    {
        href:"/",
        label:"Overview",
    },
    {
        href:"/transactions",
        label:"Transactions",
    },
    {
        href:"/accounts",
        label:"Accounts",
    },
    {
        href:"/categories",
        label:"Categories",
    },
    {
        href:"/settings",
        label:"Settings",
    }
]

export const Navigation = () =>{

    const pathname = usePathname();
    return (

        <div className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route)=>(
                <NavButton 
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname=== route.href}
                />
            ))}
        </div>
    )
}