import React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmailButton() {
	const handleClick = (e) => {
		e.preventDefault();
		window.open("mailto:simon@dunkelman.xyz", "_blank");
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" onClick={handleClick}>
						<Mail className="w-4 h-4 text-black" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>simon@dunkelman.xyz</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}