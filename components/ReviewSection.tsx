import { reviews, text } from "@/globals";
import { Review } from "./Review";
import { Button } from "./Button";
import { Subtitle, Title } from "./Text";

export function ReviewSection() {
    return (
        <div className="flex flex-col items-center p-10 bg-back2">
            <Title text={text.reviewSection}/>
            <Subtitle text={text.reviewSectionSubtitle}/>
            <div className="p-5 flex gap-6 justify-center flex-wrap w-full">
                {reviews.slice(0,3).map( val => (
                    <Review
                        key={`review-${val.person}`}
                        content={val}
                    />
                ))}
            </div>
            <Button
                text={text.seeMoreReviews}
                link="/reviews"
                invert={true}
            />
        </div>
    )   
}