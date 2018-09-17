import * as React from 'react';
import { NavigationDot } from '../NavigationDot';
import { INavigationDotProps } from '../NavigationDot';
import { NavigationIntervalLine } from '../NavigationIntervalLine';
import { IDotNavigationBarProps } from './DotNavigationBarTypes';

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
			lines.push(<NavigationIntervalLine {...childProps} step={i} />)
			dots.push(<NavigationDot {...childProps} step={i} />)
		}

		return (
			<svg height={20} viewBox="0 0 359 20">
				<g fill="none" fillRule="evenodd">
					{lines}
					{dots}			
				</g>
			</svg>
		);
	}
};

export default DotNavigationBar;