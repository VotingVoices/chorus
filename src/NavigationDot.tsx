import * as React from 'react';

interface INavigationDotProps {
	step: number;
	intervalWidth: number;
	strokeWidth: number;
	radius: number;
	barLeftX: number;
	barCenterY: number;
	color: string;
}

const NavigationDot: React.SFC<INavigationDotProps> = (props: INavigationDotProps) => {
	const {step, intervalWidth, strokeWidth, radius, barLeftX, barCenterY, color} = props;

	const leftX = barLeftX + step * intervalWidth + radius;
	const topY = barCenterY - strokeWidth / 2;
	const interiorInterval = intervalWidth - 2 * radius;

	const definition = `M ${leftX} ${topY} h ${interiorInterval} v ${strokeWidth} H ${leftX} z`;

	return (
		<path fill={color} d={definition} />
	);
};

export default NavigationDot;