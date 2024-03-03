import { Button } from "./Button";
import { Subtitle, Title } from "./Text";

export function Map() {
    return (
        <div className="w-full flex justify-center flex-row py-10 bg-back2 gap-5 flex-wrap">
            <div className="w-3/4 sm:w-1/3 min-h-[300px]">
                <iframe 
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50712.47215882044!2d-122.07553558448706!3d37.400957481682596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1709421343880!5m2!1sen!2sus" 
                    style={{border: 0}} 
                loading="lazy"/>
            </div>
            <div className="w-3/4 sm:w-1/3 flex flex-col items-center gap-3 justify-center">
                <Title text="Location"/>
                <Subtitle text="1234 Random Street Mountain View, CA"/>
                <Subtitle text="Contact me at (123)-456-7890"/>
                <Button
                    text="Open in Maps"
                    link="https://www.google.com/maps/dir//Shoreline+Amphitheatre,+One+Amphitheatre+Pkwy,+Mountain+View,+CA+94043/@37.4065468,-122.0719371,13z/data=!4m6!4m5!1m0!1m2!1m1!1s0x808fb9f776f5e165:0x1ddf014a1b553f3d!3e0"
                    invert={true}
                />
            </div>
        
        </div>
    )
}