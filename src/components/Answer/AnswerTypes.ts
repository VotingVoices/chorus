import * as React from 'react';

export enum AnswerId {
    Yes = 'Y',
    No = 'N',
	EmphaticYes = 'EY',
	UncertainNo = 'UN',
    DontKnow = 'DN',
    Other = 'Oth',
    Washington = 'WA',
    Oregon = 'OR',
    Colorado = 'CO',
    OtherState = 'OthSt',
    WalkOrBike = 'WB',
    DriveMyself = 'DrMy',
    RideShare = 'RiSh',
    AskSomeoneForRide = 'Ask',
    FamilyMembers = 'Fam',
    Coworkers = 'Cowrk',
    Friends = 'Frnd',
    SomeoneElse = 'Else',
    NoThanks = 'NT',
    Excited = 'Exc',
    Happy = 'Hppy',
    Nervous = 'Nrv',
    Shocked = 'Shck',
    Meh = 'Mh',
    Worried = 'Wrd',
    Sad = 'Sd',
    Angry = 'Ang'
}

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

export interface IAnswerProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>
{
	answerId: AnswerId;
}