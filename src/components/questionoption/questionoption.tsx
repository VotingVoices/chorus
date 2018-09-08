import * as React from 'react';
import { IQuestionOptionProps } from './questionoptiontypes';

export class QuestionOption extends React.Component<IQuestionOptionProps, any>
{
    public render(): JSX.Element
    {
        const { label } = this.props;
        return (
            <div>{label}</div>
        );
    }
}