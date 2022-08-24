import React, {useState} from "react";
import upperContactBrace from "../images/contact/upper-brace.svg";
import lowerLeftContactBrace from "../images/contact/lower-left-brace.svg";
import lowerRightContactBrace from "../images/contact/lower-right-brace.svg";


export default function AnnotatedContact(){
    const [whichHovered, setHovered] = useState(0);
    // whichHovered = 0 (none highlighted), 1 (email highlighted), 2 (twitter highlighted), 3 (blog highlighted)

    return (
        <div className="w-content flex flex-col text-lg underline-offset-8">
			<div className="flex justify-end">
				<div className="w-[65%] flex flex-col items-center mr-[15%] contact-brace mb-1" onMouseOver={() => setHovered(2)} onMouseOut={() => setHovered(0)}>
					<p className={`${whichHovered === 2 ? "text-deep-blue text-2xl" : ""}`}>Twitter</p>
					<img src={upperContactBrace} alt="Twitter @flatpackfintech" className={`${whichHovered === 2 ? "twitter-brace-hover" : ""}`} />
				</div>
			</div>
            {
                whichHovered === 1 | whichHovered === 0 ?
                <p className={`text-xl md:text-3xl tracking-widest whitespace-nowrap ${whichHovered === 1 ? "text-green underline": ""}`}>simon@flatpackfintech.com</p>
                : ""
            }
            {
                whichHovered === 2 ?
                <p className="text-xl md:text-3xl tracking-widest whitespace-nowrap">simon<span className="text-deep-blue underline">@flatpackfintech</span>.com</p>
                : ""
            }
            {
                whichHovered === 3 ?
                <p className="text-xl md:text-3xl tracking-widest whitespace-nowrap">simon@<span className="text-purple underline">flatpackfintech.com</span></p>
                : ""
            }
			
			<div className="relative mt-2">
				<div className="w-[26%] mt-1 flex flex-col items-center z-0 absolute left-0 hover contact-braces" onMouseOver={() => setHovered(1)} onMouseOut={() => setHovered(0)}>
					<img src={lowerLeftContactBrace} alt="Email" className={`${whichHovered === 1 ? "email-brace-hover" : ""}`} />
					<p className={`${whichHovered === 1 ? "text-green text-3xl underline" : ""}`}>Email</p>
				</div>
				<div className="w-[75%] flex flex-col items-center z-10 absolute right-0" onMouseOver={() => setHovered(3)} onMouseOut={() => setHovered(0)}>
					<img src={lowerRightContactBrace} alt="Blog flatpackfintech.com" className={`${whichHovered === 1 ? "email-brace-hover" : ""} ${whichHovered === 3 ? "website-brace-hover" : ""}`} />
					<p className={`${whichHovered === 3 ? "text-purple text-3xl underline" : ""}`}>Blog</p>
				</div>
			</div>
		</div>
    )
}