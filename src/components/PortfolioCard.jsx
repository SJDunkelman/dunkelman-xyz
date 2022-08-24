import React from "react";


function PortfolioCard(props){
    return (
        <div className="w-full h-full flex flex-col">
			<div className="h-72 overflow-clip">
				<img src={props.imageSrc} alt="X-Toonz Social Club" className="object-cover" />
			</div>
			<div className="py-1 px-2 rounded-bl-lg rounded-br-lg border-2 border-t-0 border-light-grey relative">
				<div className="base-shadow no-hover absolute top-2 left-2">
					<div className="offset-box py-0.5 px-2">
						{props.category}
					</div>
				</div>
				<p className="text-4xl font-semibold">{props.title}</p>
				<p>{props.description}</p>
				<a href={props.postURL}>
					<p className="text-right underline">more details &gt;&gt;</p>
				</a>
				
			</div>
		</div>
    )
}

export default PortfolioCard;