import * as React from 'react';

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

export class NavigationIntervalLine extends React.Component<INavigationDotProps, any>
{
	public render(): JSX.Element
	{
		const {step, intervalWidth, strokeWidth, radius, barLeftX, barCenterY, color} = this.props;

		if (step > 1) {
			const leftX = barLeftX + (step - 2) * intervalWidth + radius;
			const topY = barCenterY - strokeWidth / 2;
			const interiorInterval = intervalWidth - 2 * radius;

			const definition = `M ${leftX} ${topY} h ${interiorInterval} v ${strokeWidth} H ${leftX} z`;

			return <path fill={color} d={definition} />;
		}
		else {
			return <path />;
		}
	}
};

export default NavigationIntervalLine;