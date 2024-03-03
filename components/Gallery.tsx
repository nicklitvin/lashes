"use client"
/* eslint-disable @next/next/no-img-element */
import { gallery, text, urls } from "@/globals";
import { Subtitle, Title } from "./Text";
import { Button } from "./Button";
import Link from "next/link";
import { useState } from "react";

export function Gallery() {

    const imagesShown = 6;
    const [startIndex, setStartIndex] = useState<number>(0);

    return (
        <div className="flex flex-col items-center py-10 gap-3">
            <Title text={text.galleryTitle}/>
            <Subtitle text={text.gallerySubtitle} />
            <div className="grid grid-cols-2 sm:grid-cols-6">
                {gallery.concat(gallery).slice(startIndex,startIndex + imagesShown).map( (val,index) => (
                    <div 
                        key={`image-${val}-${index}`}
                        className="w-full h-full overflow-hidden"
                    >
                        <Link href={val}>
                            <img
                                src={val}
                                className="object-cover filter grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-105 "
                                alt="image"
                            />
                        </Link>
                        
                    </div>
                ))}
            </div>
            <Button 
                text="See More Images"
                invert={true}
                onPress={ () => setStartIndex( (startIndex + imagesShown) % gallery.length)}
            />
        </div>
    )
}
    // const imagesPerRow = 4;
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const showNextImages = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + imagesPerRow) % images.length);
    // };

    // return (
    //     <div className="image-grid grid grid-cols-4 gap-4">
    //         {images.slice(currentIndex, currentIndex + imagesPerRow).map((image, index) => (
    //             <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
    //     ))}
    //     <button onClick={showNextImages}>Show Next Images</button>
    //         </div>
    // );


        // <div className="flex flex-col items-center py-10 gap-3">
        //     <Title text={text.galleryTitle}/>
        //     <Subtitle text={text.gallerySubtitle} />
        //     <div className="grid grid-cols-2 sm:grid-cols-5">
        //         {gallery.map( (val,index) => 
        //             <div 
        //                 key={`image-${val}-${index}`}
        //                 className="w-full h-full overflow-hidden"
        //             >
        //                 <Link href={val}>
        //                     <img
        //                         src={val}
        //                         className="object-cover filter grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-105 "
        //                         alt="image"
        //                     />
        //                 </Link>
                        
        //             </div>
        //         )}
        //     </div>
        //     <Button
        //         text={text.instagramFollow}
        //         link={urls.instagram}
        //         invert={true}
        //     />
        // </div>
//     )
// }