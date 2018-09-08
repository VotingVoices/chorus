import * as React from 'react';
import { IQuestionOptionProps } from '../questionoption';

export type OnClickCallback = (
    evt?: React.MouseEvent<HTMLElement | HTMLInputElement>
  ) => void;

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
    /**
     * A callback for receiving a notification when the choice has been changed.
     */
    onChange?: (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IQuestionOptionProps) => void;
}