import { Review } from "@/components/Review";
import { Slide } from "@/components/Slide";
import { ReviewSection } from "@/components/ReviewSection";
import { Gallery } from "@/components/Gallery";
import { Map } from "@/components/Map";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Slide slide="Lashes" />
            <Slide slide="Brows" reverseImage={true}/>
            <ReviewSection/>
            <Gallery/>
            <Map />
        </div>
    );
}
