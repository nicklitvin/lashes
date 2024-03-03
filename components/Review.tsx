import { UserReview } from "@/globals"
import Image from "next/image"

interface Props {
    content: UserReview
}

export function Review(props : Props) {
    return (
        <div className="flex items-center flex-col shadow-lg w-5/6 sm:h-[300px] sm:w-1/4 min-w-[200px] bg-text p-6 gap-2 overflow-hidden">
            <div className="flex items-center">
                {Array.from({length: 5}).map( (val,index) => (
                    <Image
                        key={`review-${props.content.person}-star-${index}`}
                        src="/star.png"
                        alt="star"
                        width={25}
                        height={25}
                    />
                ))}
                
            </div>
            <h1 className="font-bold text-lg">
                {props.content.person}
            </h1>
            <h1 className="text-sm text-center text-wrap">
                {props.content.review}
            </h1>
        </div>
    )
}