/* eslint-disable @next/next/no-img-element */
"use client"

import { SlideName, slides } from "@/globals";
import { useTransition, animated, useSpringRef } from "react-spring"
import { Button } from "./Button";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface Props {
    slide: SlideName
    transition?: boolean
    reverseImage?: boolean
}

export function Slide(props : Props) {
    const data = slides[props.slide];
    const [firstLoad, setFirstLoad]= useState<boolean>(true);

    const [index, setIndex] = useState(0);
    const transRef = useSpringRef();
  
    useEffect(() => {
        setFirstLoad(false);
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % data.images.length);
        }, 5000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        transRef.start()
      }, [index])
  
    const transitions = useTransition(index, {
      ref: transRef,
      from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 1, transform: 'translate3d(-100%,0,0)' },
      config: { duration: firstLoad ? 0 : 2000},
      exitBeforeEnter: true
    });

    // const [index, setIndex] = useState<number>(0); 
    // const transitions = useTransition(data.images[index], {
    //     from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    //     leave: { opacity: 1, transform: 'translate3d(-50%,0,0)'},
    //     config: { duration: 2000 },
    //     exitBeforeEnter: true,
    // })

    // timerID = setTimeout( () => {
    //     if (timerID) clearTimeout(timerID);
    //     const x = (index + 1) % slides?.[props.slide].images.length;
    //     setIndex(x);
    //     console.log(x);
    // }, 2000)

    return (
        <div className="w-full bg-text relative filter grayscale transition duration-500 ease-in-out hover:grayscale-0">
            { props.transition ? transitions((style, i) => (
                <div className="overflow-hidden max-h-[300px] flex justify-center items-center">
                    <animated.img
                        key={i}
                        src={data.images[i]}
                        alt={`Image ${i + 1}`}
                        style={style}
                        className="w-full h-auto"
                    />
                </div>
                // <animated.div style={style}
                //     key={`image-${props.slide}-${index}`} 
                // >
                //     <div className="overflow-hidden max-h-[300px] flex justify-center items-center">
                //         <img
                //             src={item}
                //             alt="image"
                //             className="w-full h-auto"
                //         />
                //     </div>
                // </animated.div>
            )) : 
                <div className="overflow-hidden max-h-[300px] flex justify-center items-center">
                    <img
                        src={data.images[0]}
                        alt="image"
                        className={classNames(
                            "w-full h-auto",
                            props.reverseImage ? "transform scale-x-[-1]" : ""
                        )}
                    />
                </div>
            }
            <div className={classNames(
                props.reverseImage ? "left-0" : "left-1/2",
                "absolute top-0 h-full w-1/2"
            )}>
                <div className="flex flex-col h-full justify-center items-center gap-2">
                    <h1 className={classNames(
                        "font-bold text-xl sm:text-3xl text-center",
                    )}>
                        {data.title}
                    </h1>
                    <h1 className={classNames(
                        "font-bold text-md sm:text-xl text-center",
                    )}>
                        {data.subtitle}
                    </h1>
                    <Button text={data.button} link={data.link} moreClass="text-md sm:text-lg px-4 py-2"/>
                </div>
            </div>
        </div>
    )
}