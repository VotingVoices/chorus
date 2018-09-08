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


interface INavigationDotProps
{
	step: number;
	currentStep: number;
	intervalWidth: number;
	strokeWidth: number;
	radius: number;
	barLeftX: number;
	barCenterY: number;
	color: string;
}

export class NavigationDot extends React.Component<INavigationDotProps, any>
{
	public render(): JSX.Element
	{
		const {step, currentStep, intervalWidth, strokeWidth, radius, barLeftX, barCenterY, color} = this.props;

		let path: JSX.Element;

		if (step > 1) {
			const leftX = barLeftX + (step - 2) * intervalWidth + radius;
			const topY = barCenterY - strokeWidth / 2;
			const interiorInterval = intervalWidth - 2 * radius;

			const definition = `M ${leftX} ${topY} h ${interiorInterval} v ${strokeWidth} H ${leftX} z`;

			path = <path fill={color} d={definition} />;
		}
		else {
			path = <div />;
		}

		return (
			<div>
				{path}
				<circle fillOpacity={stepOpacity(currentStep, step)} fill={color} stroke={color} stroke-width={strokeWidth} cx={10} cy={10} r={8} />
			</div>
		);
	}
};

export default NavigationDot;