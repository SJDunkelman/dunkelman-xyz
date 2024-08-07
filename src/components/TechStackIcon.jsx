import React from 'react';
import { BiLogoPostgresql, BiLogoPython, BiLogoGoLang } from "react-icons/bi";
import { TbBrandSupabase } from "react-icons/tb";
import { SiSolidity, SiReact, SiElectron } from "react-icons/si";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

const techIcons = {
	Python: <BiLogoPython size={16} className="text-[#4584B6]" />,
	React: <SiReact size={16} className="text-[#008bb9]" />,
	ReactNative: <SiReact size={16} className="text-[#6bd7ff]" />,
	Postgres: <BiLogoPostgresql size={16} />,
	Supabase: <TbBrandSupabase size={16} />,
	Solidity: <SiSolidity size={16} />,
	Go: <BiLogoGoLang size={16} />,
	Electron: <SiElectron size={16} className="text-[#272937]" />,
};

const formatTechName = (name) => {
	return name.replace(/([A-Z])/g, ' $1').trim();
};

export default function TechStackIcons({ techStack, isMobile = false }) {
	if (isMobile) {
		return (
			<div className="flex flex-wrap gap-2">
				{techStack.map((tech) => (
					<div key={tech} className="flex items-center space-x-1">
            <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
              {techIcons[tech]}
            </span>
						<span className="text-xs">{formatTechName(tech)}</span>
					</div>
				))}
			</div>
		);
	}

	return (
		<TooltipProvider>
			<div className="grid grid-cols-3 gap-2 w-[75px]">
				{techStack.map((tech) => (
					<Tooltip key={tech}>
						<TooltipTrigger>
              <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                {techIcons[tech]}
              </span>
						</TooltipTrigger>
						<TooltipContent side="bottom" align="center">
							<p>{formatTechName(tech)}</p>
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	);
}