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
		const {currentStep, color, intervalWidth, strokeWidth, dotRadius} = this.props;

		const childProps = {
			barCenterY: 10,
			barLeftX: 10,
			color,
			currentStep,
			intervalWidth,
			radius: dotRadius,
			strokeWidth,
		} as INavigationDotProps;

		return (
			<svg height={20} viewBox="0 0 359 20">
				<g fill="none" fillRule="evenodd">
					<NavigationIntervalLine {...childProps} step={1} />
					<NavigationIntervalLine {...childProps} step={2} />
					<NavigationIntervalLine {...childProps} step={3} />
					<NavigationIntervalLine {...childProps} step={4} />
					<NavigationIntervalLine {...childProps} step={5} />
					<NavigationIntervalLine {...childProps} step={6} />
					<NavigationIntervalLine {...childProps} step={7} />

					<NavigationDot {...childProps} step={1} />
					<NavigationDot {...childProps} step={2} />
					<NavigationDot {...childProps} step={3} />
					<NavigationDot {...childProps} step={4} />
					<NavigationDot {...childProps} step={5} />
					<NavigationDot {...childProps} step={6} />
					<NavigationDot {...childProps} step={7} />				
				</g>
			</svg>
		);
	}
};

export default DotNavigationBar;