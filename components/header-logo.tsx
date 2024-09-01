import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg"
export const  HeaderLogo = () =>{

    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src={logo} alt="logo" height={28} width={28}/>
                <p className="font-semibold text-white text-2xl ml-2.5">
                    Finance
                </p>
            </div>
        </Link>
    )
}