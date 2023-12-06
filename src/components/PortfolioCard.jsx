import React from "react";
import useWindowDimensions from "../components/utils/useWindowDimensions.js";


function PortfolioCard(props){
	let portfolioCard = <></>;
	const {width, height} = useWindowDimensions();

	const categories = Array.isArray(props.category) ? props.category : [props.category];

	const categoryBoxes = categories.map((category, i) => (
	  <div key={i} className="base-shadow no-hover">
		<div className="offset-box py-0.5 px-2">{category}</div>
	  </div>
	));

	if (width < 768) {
		portfolioCard =
		<div className="w-full h-full flex flex-col">
			<div className="h-content max-h-48 overflow-clip">
				<img src={props.imageSrc} alt="X-Toonz Social Club" className="object-cover" />
			</div>
			<div className="py-1 px-2 rounded-bl-lg rounded-br-lg border-2 border-t-0 border-light-grey flex flex-col space-y-2">
				<div className="w-full flex justify-start pt-2 space-x-2">
					{categoryBoxes}
				</div>
				<p className="text-4xl font-semibold">{props.title}</p>
				<p className="whitespace-pre-line">{props.description}</p>
				<a href={props.postURL}>
					<p className="text-right underline">more details &gt;&gt;</p>
				</a>
			</div>
		</div>
	} else {
		portfolioCard = 
		<div className="w-full h-full flex flex-col">
			<div className="h-72 overflow-clip">
				<img src={props.imageSrc} alt="X-Toonz Social Club" className="object-cover" />
			</div>
			<div className="py-1 px-2 rounded-bl-lg rounded-br-lg border-2 border-t-0 border-light-grey relative">
				<div className="absolute top-2 left-2 flex space-x-2">
					{categoryBoxes}
				</div>
				<p className="text-4xl font-semibold">{props.title}</p>
				<p>{props.description}</p>
				<a href={props.postURL}>
					<p className="text-right underline">more details &gt;&gt;</p>
				</a>
			</div>
		</div>
	};

    return (
		<div className="relative">
			{portfolioCard}
			{
				props.sold ?
				<div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-tr from-deep-blue/75 to-light-purple">
					<p className="text-xl text-white">SOLD</p>
				</div> : null
			}
			
		</div>
    )
}

export default PortfolioCard;