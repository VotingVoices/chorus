import * as React from 'react';
import { NavigationDot } from './NavigationDot';
import { INavigationDotProps } from './NavigationDot';
import { NavigationIntervalLine } from './NavigationIntervalLine';
import './DotNavigationBar.css';

interface IDotNavigationBarProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
	stepCount: number;
	currentStep: number;
	color: string;
	intervalWidth: number;
	strokeWidth: number;
	dotRadius: number;
}

// SVG code originally borrowed from https://www.crushthemidterms.org/
export class DotNavigationBar extends React.Component<IDotNavigationBarProps, any>
{
	public render(): JSX.Element
	{
		const {stepCount, currentStep, color, intervalWidth, strokeWidth, dotRadius} = this.props;

		const childProps = {
			barCenterY: 10,
			barLeftX: 10,
			color,
			currentStep,
			intervalWidth,
			radius: dotRadius,
			strokeWidth,
		} as INavigationDotProps;

		const lines = [];
		const dots = [];

		for (let i = 1; i <= stepCount; i++) {
			lines.push(<NavigationIntervalLine key={'line' + i} {...childProps} step={i} />)
			dots.push(<NavigationDot key={'dot' + i} {...childProps} step={i} />)
		}

		const viewboxDefinition = `0 0 520 20`;

		return (
			<svg className="svgView" height={20} viewBox={viewboxDefinition}>
				<g fill="none" fillRule="evenodd">
					{lines}
					{dots}			
				</g>
			</svg>
		);
	}
};

export default DotNavigationBar;