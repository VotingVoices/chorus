import * as React from 'react';

export interface IDotNavigationBarProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
	stepCount: number;
	currentStep: number;
	color: string;
	intervalWidth: number;
	strokeWidth: number;
	dotRadius: number;
}