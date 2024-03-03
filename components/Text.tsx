import classNames from "classnames"

interface Props {
    text: string
    invert?: boolean
}

export function Title(props : Props) {
    return (
        <h1 className={classNames(
            "text-3xl font-bold text-center",
            props.invert ? "text-text" : "text-primary"
        )}>
            {props.text}
        </h1>
    )
}

export function Subtitle(props : Props) {
    return (
        <h1 className={classNames(
            "text-xl text-center",
            props.invert ? "text-text" : "text-primary"
        )}>
            {props.text}
        </h1>
    )
}   