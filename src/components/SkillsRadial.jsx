import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const skills = [
	{ subject: 'Coding', A: 95, fullMark: 100 },
	{ subject: 'System Design', A: 80, fullMark: 100 },
	{ subject: 'Product Management', A: 85, fullMark: 100 },
	{ subject: 'UX/UI Design', A: 70, fullMark: 100 },
	{ subject: 'Data Analysis', A: 75, fullMark: 100 },
	{ subject: 'Business Strategy', A: 85, fullMark: 100 },
	{ subject: 'Team Leadership', A: 90, fullMark: 100 },
];

export default function SkillsRadial() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart cx="50%" cy="50%" outerRadius="60%" data={skills}>
				<PolarGrid />
				<PolarAngleAxis
					dataKey="subject"
					tick={{ fill: '#666', fontSize: 12 }}
					tickLine={false}
				/>
				<PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
				<Radar name="Skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
}