import * as React from 'react';

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