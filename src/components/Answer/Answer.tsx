import * as React from 'react';

import { AnswerId } from '../../store';

import './Answer.css';

// TODO: Move to its own file.
export function getAnswerLabel(answer: AnswerId): string {
    switch(answer) {
        case AnswerId.Yes:
            return 'Yep!';

        case AnswerId.No:
            return 'Nope';

        case AnswerId.EmphaticYes:
            return 'Heck yeah!';

        case AnswerId.UncertainNo:
            return 'Uhh... Nope';

        case AnswerId.DontKnow:
            return 'I dunno...';

        case AnswerId.Other:
            return 'Other';

        case AnswerId.Washington:
            return 'Washington';

        case AnswerId.Oregon:
            return 'Oregon';

        case AnswerId.Colorado:
            return 'Colorado';

        case AnswerId.OtherState:
            return 'Nope';

        case AnswerId.WalkOrBike:
            return 'Walk or bike';

        case AnswerId.DriveMyself:
            return 'Drive myself';

        case AnswerId.RideShare:
            return 'Lyft or Uber';

        case AnswerId.AskSomeoneForRide:
            return 'Ask someone for a ride';

        case AnswerId.FamilyMembers:
            return 'Family members';

        case AnswerId.Coworkers:
            return 'Coworkers';

        case AnswerId.Friends:
            return 'Friends';

        case AnswerId.SomeoneElse:
            return 'Someone else';
        
        case AnswerId.NoThanks:
            return 'No thanks';

        case AnswerId.Excited:
            return 'Excited';

        case AnswerId.Happy:
            return 'Happy';

        case AnswerId.Nervous:
            return 'Nervous';

        case AnswerId.Shocked:
            return 'Shocked';

        case AnswerId.Meh:
            return 'Meh';

        case AnswerId.Worried:
            return 'Worried';

        case AnswerId.Sad:
            return 'Sad';

        case AnswerId.Angry:
            return 'Angry';
    }

    throw new Error("Unrecognized AnswerId");
}

interface IAnswerProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
    answerId: AnswerId;
}

export class Answer extends React.Component<IAnswerProps, any>
{
    public render(): JSX.Element
    {
        const { answerId } = this.props;
        const label = getAnswerLabel(answerId);

        return (
            <span className="dot" onClick={this._onClick}>
                {label}
            </span>
        );
    }

    private _onClick = (ev: React.MouseEvent<HTMLElement>): void => {
        const { onClick } = this.props;
        ev.preventDefault();
        ev.stopPropagation();

        if (onClick)
        {
            onClick(ev);
        }
    }
}