import * as React from 'react';
import { NavigationDot } from '../NavigationDot';
import { NavigationIntervalLine } from '../NavigationIntervalLine';
import { IDotNavigationBarProps } from './DotNavigationBarTypes';

// SVG code originally borrowed from https://www.crushthemidterms.org/
export class DotNavigationBar extends React.Component<IDotNavigationBarProps, any>
{
	public render(): JSX.Element
	{
		const {currentStep} = this.props;
		const color = "#E8E8E8";
		const intervalWidth = 50;
		const strokeWidth = 3;
		const radius = 8;

		return (
			<svg height={20} viewBox="0 0 359 20">
				<g fill="none" fillRule="evenodd">
					<NavigationIntervalLine step={1} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationIntervalLine step={2} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationIntervalLine step={3} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationIntervalLine step={4} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationIntervalLine step={5} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationIntervalLine step={6} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationIntervalLine step={7} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />

					<NavigationDot step={1} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationDot step={2} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationDot step={3} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationDot step={4} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationDot step={5} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationDot step={6} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />
					<NavigationDot step={7} currentStep={currentStep} intervalWidth={intervalWidth} strokeWidth={strokeWidth} radius={radius} barLeftX={10} barCenterY={10} color={color} />				
				</g>
			</svg>
		);
	}
};

export default DotNavigationBar;