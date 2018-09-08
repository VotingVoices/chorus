import * as React from 'react';
import { IQuestionOptionProps, QuestionOption } from '../questionoption';
import { IQuestionProps } from './questiontypes';

export class Question extends React.Component<IQuestionProps, any>
{
    public render(): JSX.Element
    {
        const { label, options } = this.props;
        return (
            <div>
                <div>{label}</div>
                <div>
                    {options!.map(
                        (option: IQuestionOptionProps) => {
                            return (<QuestionOption key='A' {...option} />);
                        }
                    )}
                </div>
            </div>
        );
    }
}