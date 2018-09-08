import * as React from 'react';

function stepFill(current: number, target: number) {
	const grayed = "#E8E8E8";
	const filled = "#FF4E4E";

	if (current < target)
	{
		return grayed;
	}
	else
	{
		return filled;
	}
}

interface IDotNavigationBarProps {
	currentStep: number;
}

// SVG code originally borrowed from https://www.crushthemidterms.org/
const DotNavigationBar: React.SFC<IDotNavigationBarProps> = (props: IDotNavigationBarProps) => {
	const {currentStep} = props;

	return (
		<svg height={18} viewBox="0 0 359 18">
			<g fill="none" fillRule="evenodd">
				<path id="line-bg" fill="#E8E8E8" d="M4 7h346.5v3H4z" />

				<path id="line-1" fill={stepFill(currentStep, 2)} d="M7 7h56.5v3H7z" />
				<path id="line-2" fill={stepFill(currentStep, 3)} d="M66 7h56.5v3H66z" />
				<path id="line-3" fill={stepFill(currentStep, 4)} d="M123 7h56.5v3H123z" />
				<path id="line-4" fill={stepFill(currentStep, 5)} d="M180 7h56.5v3H180z" />
				<path id="line-5" fill={stepFill(currentStep, 6)} d="M237 7h56.5v3H237z" />
				<path id="line-6" fill={stepFill(currentStep, 7)} d="M294 7h56.5v3H294z" />

				<ellipse id="oval-1" fill={stepFill(currentStep, 1)} cx={8.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-2" fill={stepFill(currentStep, 2)} cx={65.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-3" fill={stepFill(currentStep, 3)} cx={122.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-4" fill={stepFill(currentStep, 4)} cx={179.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-5" fill={stepFill(currentStep, 5)} cx={236.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-6" fill={stepFill(currentStep, 6)} cx={293.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-7" fill={stepFill(currentStep, 7)} cx={350.5} cy={8.5} rx={8.5} ry={8.5} />
			</g>
		</svg>
	);
};

export default DotNavigationBar;