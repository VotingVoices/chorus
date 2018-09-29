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

export interface INavigationDotProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
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

		const centerX = barLeftX + (step - 1) * intervalWidth;

		return (
			<circle fillOpacity={stepOpacity(currentStep, step)} fill={color} stroke={color} strokeWidth={strokeWidth} cx={centerX} cy={barCenterY} r={radius} />
		);
	}
};

export default NavigationDot;