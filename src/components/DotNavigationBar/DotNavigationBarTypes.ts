import * as React from 'react';

export interface IDotNavigationBarProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
	currentStep: number;
}