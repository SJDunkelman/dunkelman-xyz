import React, {useEffect} from "react";
import lottie from 'lottie-web';
import IdeaAnimationData from "../data/animations/man-idea.json";

 export default function IdeaAnimation(){
    let animationContainer = React.createRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: IdeaAnimationData,
            renderer: 'svg',
            loop: true,
            autoplay: true,
          });
    }, [])

    return (
        <div className="container w-80 h-auto" ref={animationContainer}></div>
    )
}