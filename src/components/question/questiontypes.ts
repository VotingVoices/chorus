import * as React from 'react';
import { IQuestionOptionProps } from '../questionoption';

export interface IQuestionProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
    /**
     * The question we're posing to the user
     */
    label?: string;
    /**
     * The options the user has to choose from
     */
    options?: IQuestionOptionProps[];
}