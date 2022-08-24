import React, {useState, useEffect} from "react";
import chevronLeft from "../images/icons/chevron-left.svg";
import chevronRight from "../images/icons/chevron-right.svg";

function TestimonyCard(){
    const testimonyData = [
        {
            "text": "Simon is a brilliant guy. Able to take on a job which was a little bit technically awkward (that many had refused for being too complex) and pulled it off flawlessly. Extremely fast to respond to questions and turn around changes. Planning to work with Simon again.",
            "name": "Raymond Thompson",
            "company": "XRDC",
            "title": "Founder",
        },
        {
            "text": "Simon was an extremely skillful and professional contractor and I would have no hesitation in rehiring as and when we have a requirement for his skillset.",
            "name": "Nigel Williams",
            "company": "Effective Change Management Ltd",
            "title": "Senior Consultant",
        },
        {
            "text": "He make website good.",
            "name": "Tom Woodnutt",
            "company": "Feeling Mutual",
            "title": "Founder",
        },
    ]

    const [testimonyIndex, setTestimony] = useState(0);

    const increaseTestimonyIndex = () => {
        if (testimonyIndex + 1 < testimonyData.length) {
            setTestimony(testimonyIndex + 1);
        }
        else {
            setTestimony(0);
        }
      }
    
    const decreaseTestimonyIndex = () => {
        if (testimonyIndex === 0) {
            setTestimony(testimonyData.length - 1);
        }
        else {
            setTestimony(testimonyIndex - 1);
        }
    }
    
    let testimony = testimonyData[testimonyIndex];

    let paginationArr = [];
    for (let i = 0; i < testimonyData.length; i++){
        paginationArr.push(<div key={i} className={"fixed-circle cursor-pointer p-2 rounded-full " + (i === testimonyIndex ? "bg-deep-blue" : "bg-white")} onClick={() => setTestimony(i)}/>)
    }

    return (
        <div className="flex flex-col space-y-4 items-center w-full">
            <div className="flex space-x-4 justify-center items-center">
                <div className="flex items-center text-3xl cursor-pointer" onClick={decreaseTestimonyIndex}>
                    &lt;
                </div>
                <div className="flex flex-col items-center justify-between fixed-block blue-shadow py-2 px-2 w-[40rem] h-52">
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-justify">{testimony.text}</p>
                    </div>
                    <div className="text-center pt-2">
                        <p>{testimony.name}</p>
                        <p className="text-sm font-bold">{testimony.company}</p>
                        <p className="text-sm">{testimony.title}</p>
                    </div>
                </div>
                <div className="flex items-center text-3xl cursor-pointer" onClick={increaseTestimonyIndex}>
                    &gt;
                </div>
            </div>
            <div className="flex space-x-4">
                {/* {<div className="border-2 p-2 rounded-full" /> * 3} */}
                {paginationArr}
            </div>
        </div>
    )
}

export default TestimonyCard;