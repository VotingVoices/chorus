import * as React from 'react';

interface IPlanStepProps extends React.InputHTMLAttributes<HTMLElement> {
    header: string,
    description: string,
    linkLabel?: string,
    linkUrl?: string
 }

export class PlanStep extends React.Component<IPlanStepProps, any> {
	public render(): JSX.Element {
        const { header, description, linkLabel, linkUrl } = this.props;

		return (
			<div>
                <div>{header}</div>
                <div>{description}</div>
                { (linkLabel && linkUrl) && (<a href={linkUrl}>{linkLabel}</a>) }
            </div>
		);
	}
}