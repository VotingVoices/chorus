import * as React from 'react';
import { INavigationDotProps } from './NavigationDotTypes';

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

export class NavigationDot extends React.Component<INavigationDotProps, any>
{
	public render(): JSX.Element
	{
		const {step, currentStep, intervalWidth, strokeWidth, radius, barLeftX, barCenterY, color} = this.props;

		const centerX = barLeftX + (step - 1) * intervalWidth;

		return (
			<circle fillOpacity={stepOpacity(currentStep, step)} fill={color} stroke={color} stroke-width={strokeWidth} cx={centerX} cy={barCenterY} r={radius} />
		);
	}
};

export default NavigationDot;