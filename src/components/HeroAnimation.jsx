import React, {useEffect} from "react";
import lottie from 'lottie-web';
import HeroAnimationData from "../data/animations/man-working.json";

 export default function HeroAnimation(){
    let animationContainer = React.createRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: HeroAnimationData,
            renderer: 'svg',
            loop: true,
            autoplay: true,
          });
    }, [])

    return (
        <div className="container w-96 h-auto" ref={animationContainer}></div>
    )
}