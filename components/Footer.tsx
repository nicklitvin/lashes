import { text } from "@/globals";
import Image from "next/image";

export function Footer() {
    return (
        <div className="bg-primary flex p-10 items-center flex-col gap-5">
            <Image
                alt="logo"
                src={"/icon.png"}
                width={250}
                height={250}
                className="invert"
            />
            <p className="text-text text-sm">{text.copyright}</p> 
        </div>
    )
}