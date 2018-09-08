import * as React from 'react';
import NavigationDot from './NavigationDot';

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
				<NavigationDot step={1} intervalWidth={50} strokeWidth={3} radius={8} barLeftX={10} barCenterY={10} color={color} />

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