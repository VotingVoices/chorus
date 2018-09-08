import * as React from 'react';

function stepOpacity(current: number, target: number) {
	if (current === target)
	{
		return 0.0;
	}
	else
	{
		return 1.0;
	}
}

interface IDotNavigationBarProps {
	currentStep: number;
}

// SVG code originally borrowed from https://www.crushthemidterms.org/
const DotNavigationBar: React.SFC<IDotNavigationBarProps> = (props: IDotNavigationBarProps) => {
	const {currentStep} = props;
	const color = "#E8E8E8";
	const strokeWidth = 3;

	return (
		<svg height={20} viewBox="0 0 359 20">
			<g fill="none" fillRule="evenodd">
				<path id="line-1" fill={color} d="M 18 8.5 h 34 v 3 H 18 z" />
				<path id="line-2" fill={color} d="M 68 8.5 h 34 v 3 H 68 z" />
				<path id="line-3" fill={color} d="M 118 8.5 h 34 v 3 H 118 z" />
				<path id="line-4" fill={color} d="M 168 8.5 h 34 v 3 H 168 z" />
				<path id="line-5" fill={color} d="M 218 8.5 h 34 v 3 H 218 z" />
				<path id="line-6" fill={color} d="M 268 8.5 h 34 v 3 H 268 z" />

				<circle id="oval-1" fillOpacity={stepOpacity(currentStep, 1)} fill={color} stroke={color} stroke-width={strokeWidth} cx={10} cy={10} r={8} />
				<circle id="oval-2" fillOpacity={stepOpacity(currentStep, 2)} fill={color} stroke={color} stroke-width={strokeWidth} cx={60} cy={10} r={8} />
				<circle id="oval-3" fillOpacity={stepOpacity(currentStep, 3)} fill={color} stroke={color} stroke-width={strokeWidth} cx={110} cy={10} r={8} />
				<circle id="oval-4" fillOpacity={stepOpacity(currentStep, 4)} fill={color} stroke={color} stroke-width={strokeWidth} cx={160} cy={10} r={8} />
				<circle id="oval-5" fillOpacity={stepOpacity(currentStep, 5)} fill={color} stroke={color} stroke-width={strokeWidth} cx={210} cy={10} r={8} />
				<circle id="oval-6" fillOpacity={stepOpacity(currentStep, 6)} fill={color} stroke={color} stroke-width={strokeWidth} cx={260} cy={10} r={8} />
				<circle id="oval-7" fillOpacity={stepOpacity(currentStep, 7)} fill={color} stroke={color} stroke-width={strokeWidth} cx={310} cy={10} r={8} />
			</g>
		</svg>
	);
};

export default DotNavigationBar;