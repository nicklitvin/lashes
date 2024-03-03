"use client"
import classNames from "classnames"
import Link from "next/link"

interface Props {
    text: string
    link?: string
    onPress?: () => any 
    invert?: boolean
    moreClass?: string
}

export function Button(props : Props) {
    const func = () => null;

    const content = (
        <button 
            className={classNames(
                props.moreClass ?? "px-4 py-1",
                props.invert ? 
                    "bg-primary text-text hover:brightness-150" : 
                    "bg-text text-primary hover:brightness-75"
            )}
            onClick={props.onPress ?? func}
        >
            {props.text}
        </button>
    )

    if (props.link) {
        return (
            <Link href={props.link} target={props.link.includes("http") ? "_blank" : "_self"}>
                {content}   
            </Link>    
        )
    } else {
        return content
    }
}