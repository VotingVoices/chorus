import * as React from 'react';

function stepStyle(current: number, target: number) {
	const hiddenStyle = {
		display: 'none'
	};

	const visibleStyle = {
	};

	if (current < target)
	{
		return visibleStyle;
	}
	else
	{
		return hiddenStyle;
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

				<ellipse id="oval-1" fill="#E8E8E8" style={stepStyle(currentStep, 1)} cx={8.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-2" fill="#E8E8E8" style={stepStyle(currentStep, 2)} cx={65.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-3" fill="#E8E8E8" style={stepStyle(currentStep, 3)} cx={122.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-4" fill="#E8E8E8" style={stepStyle(currentStep, 4)} cx={179.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-5" fill="#E8E8E8" style={stepStyle(currentStep, 5)} cx={236.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-6" fill="#E8E8E8" style={stepStyle(currentStep, 6)} cx={293.5} cy={8.5} rx={8.5} ry={8.5} />
				<ellipse id="oval-7" fill="#E8E8E8" style={stepStyle(currentStep, 7)} cx={350.5} cy={8.5} rx={8.5} ry={8.5} />
			</g>
		</svg>
	);
};

export default DotNavigationBar;