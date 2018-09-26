import * as React from 'react';
import { NavigationDot } from '../NavigationDot';
import { INavigationDotProps } from '../NavigationDot';
import { NavigationIntervalLine } from '../NavigationIntervalLine';

interface IDotNavigationBarProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
	stepCount: number;
	currentStep: number;
	viewboxWidth: number;
	viewboxHeight: number;
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
		const {stepCount, currentStep, viewboxWidth, viewboxHeight, color, intervalWidth, strokeWidth, dotRadius} = this.props;

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
			lines.push(<NavigationIntervalLine {...childProps} step={i} />)
			dots.push(<NavigationDot {...childProps} step={i} />)
		}

		const viewboxDefinition = `0 0 ${viewboxWidth} ${viewboxHeight}`;

		return (
			<svg height={20} viewBox={viewboxDefinition}>
				<g fill="none" fillRule="evenodd">
					{lines}
					{dots}			
				</g>
			</svg>
		);
	}
};

export default DotNavigationBar;