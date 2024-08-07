import React from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { ChevronRight } from "lucide-react";
import TechStackIcons from "@/components/TechStackIcon.jsx";

const projects = [
	// {
	// 	name: "Skool.Report",
	// 	status: "live",
	// 	techStack: ["Python", "React", "Postgres"],
	// 	notes: "Community intelligence SaaS for Skool.com communities",
	// 	link: "https://www.skool.report/",
	// 	date: new Date('2024-05-01'),
	// },
	{
		name: "Comet.Computer (fka Smth AI)",
		status: "dead",
		techStack: ["Python", "React", "Supabase"],
		notes: "AI agent orchestration platform & products",
		link: "/writing/smth-ai",
		date: new Date('2023-04-10'),
	},
	{
		name: "Wealth Sherpa",
		status: "dead",
		techStack: ["React", "Python", "Electron"],
		notes: "Suitability letter automation SaaS for financial advisors",
		link: "/writing/wealth-sherpa",
		date: new Date('2020-09-01'),
	},
	{
		name: "",
		status: "testing",
		techStack: ["Go", "React", "Python"],
		notes: "Productivity RPG to gamify time management using vision models",
		link: "",
		date: new Date('2024-07-10'),
	},
	{
		name: "",
		status: "testing",
		techStack: ["ReactNative", "Python"],
		notes: "Word puzzle game powered by AI-driven semantic knowledge graphs",
		link: "/writing/redacted-word-game",
		date: new Date('2024-07-10'),
	},
	{
		name: "",
		status: "development",
		techStack: ["Go", "Python", "React", "Postgres"],
		notes: "Personalised Development Environment for LLMs",
		link: "",  // /writing/the-problem-with-chatgpt
		date: new Date('2024-08-01'),
	},
	{
		name: "Conjure Page",
		status: "paused",
		techStack: ["Python", "Postgres"],
		notes: "Conversational AI notes app",
		link: "/writing/conjure-page",
		date: new Date('2024-02-01'),
	},
	{
		name: "Health Potion",
		status: "dead",
		techStack: ["Solidity", "React"],
		notes: "Insuretech protecting against crypto scams & fraud built; insured $40k of assets in 34 days during EF",
		link: "https://www.healthpotion.xyz/",
		date: new Date('2022-10-01'),
	},
	{
		name: "Primordia.io",
		status: "sold",
		techStack: ["React"],
		notes: "Online community built on top of Creative Commons NFT project; sold to NFT project",
		link: "https://www.moonrunners.io/",
		date: new Date('2022-04-01'),
	},
];

const sortedProjects = [...projects].sort((a, b) => b.date - a.date);

const statusColors = {
	live: "bg-green-100 text-green-800",
	dead: "bg-red-100 text-red-800",
	testing: "bg-purple-100 text-purple-800",
	development: "bg-blue-100 text-blue-800",
	sold: 'bg-yellow-100 text-yellow-800',
	paused: 'bg-slate-300 text-slate-800',
};

const ProjectCard = ({ project, index }) => (
	<div className="bg-white shadow rounded-lg p-4 mb-4">
		<div className="flex justify-between items-center mb-2">
			<h3 className="font-medium">
				{project.name ? (
					project.name
				) : (
					<span className="bg-black text-white text-xs px-2 py-1">REDACTED</span>
				)}
			</h3>
			<span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
        {project.status}
      </span>
		</div>
		<div className="mb-2">
			<TechStackIcons techStack={project.techStack} isMobile={true} />
		</div>
		<p className="text-sm text-gray-600 mb-2">{project.notes}</p>
		{project.link && (
			<a href={project.link} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
				More <ChevronRight size={16} />
			</a>
		)}
	</div>
);

export default function ProjectsTable() {
	return (
		<div>
			{/* Mobile view */}
			<div className="md:hidden">
				{sortedProjects.map((project, index) => (
					<ProjectCard key={project.name || `redacted-${index}`} project={project} index={index} />
				))}
			</div>

			{/* Desktop view */}
			<div className="hidden md:block">
				<Table>
					<TableCaption>Plus many more collecting dust</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[150px]">Name</TableHead>
							<TableHead className="w-[100px]">Status</TableHead>
							<TableHead className="w-[100px]">Tech Stack</TableHead>
							<TableHead className="w-full">Notes</TableHead>
							<TableHead className="w-min"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{sortedProjects.map((project, index) => (
							<TableRow key={project.name || `redacted-${index}`}>
								<TableCell className="font-medium break-words">
									{project.name ? (
										project.name
									) : (
										<span className="bg-black text-white text-xs px-2 py-1">REDACTED</span>
									)}
								</TableCell>
								<TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
								</TableCell>
								<TableCell>
									<TechStackIcons techStack={project.techStack} isMobile={false} />
								</TableCell>
								<TableCell>{project.notes}</TableCell>
								<TableCell>
									{project.link && (
										<a href={project.link} className="flex items-center text-blue-600 hover:text-blue-800">
											More <ChevronRight size={16} />
										</a>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}