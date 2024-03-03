import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { headerLinks, text, urls } from "@/globals";


export function Header() {
    return (
        <div className="bg-primary flex p-2 items-center gap-6">
            <Link href="/">
                <Image
                    className="invert"
                    src={"/icon.png"}
                    width={100}
                    height={100}
                    alt="Logo"
                />
            </Link>
            <div className="flex-1"/>
            {headerLinks.map( val => (
                <Link 
                    className="hidden sm:flex"
                    href={val.link} 
                    key={`link-${val.link}`} 
                >
                    <h1 className="text-text hover:underline">
                        {val.text}
                    </h1>
                </Link>
            ))}
            <Button
                text={text.book}
                link={urls.square}  
            />
        </div>
    )
}