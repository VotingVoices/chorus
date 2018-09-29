import { Action, AnyAction, Dispatch } from 'redux';

export enum QuestionId {
	AreYouRegistered = 'Reg',
	OverseasMilitary = 'OvM',
	VoteByMailState = 'St',
	AbsenteeBallot = 'Abs',
	PollingLocation = 'PllLoc',
	SpecialAccommodations = 'Accm',
	TransportationMethod = 'Trns',
	ReceivedBallot = 'RcBlt',
	Deadline = 'Ddln',
	ReturnMethod = 'Rtrn',
	MissWork = 'MssWrk',
	FamiliarWithBallot = 'Fmlr',
	PeopleToInvite = 'Inv',
	ReasonToVote = 'Rsn',
	Emotion = 'Em',
}

export const ALL_QUESTION_IDS: QuestionId[] = [
	QuestionId.AreYouRegistered,
	QuestionId.OverseasMilitary,
	QuestionId.AbsenteeBallot,
	QuestionId.VoteByMailState,
	QuestionId.PollingLocation,
	QuestionId.SpecialAccommodations,
	QuestionId.TransportationMethod,
	QuestionId.ReceivedBallot,
	QuestionId.Deadline,
	QuestionId.ReturnMethod,
	QuestionId.MissWork,
	QuestionId.FamiliarWithBallot,
	QuestionId.PeopleToInvite,
	QuestionId.ReasonToVote,
	QuestionId.Emotion,
];

export enum AnswerId {
	Yes = 'Y',
	No = 'N',
	EmphaticYes = 'EY',
	DontKnow = 'DN',
	Washington = 'WA',
	Oregon = 'OR',
	Colorado = 'CO',
	OtherState = 'OthSt',
	DriveMyself = 'DrMy',
	Carpool = 'Cpl',
	RideShare = 'RiSh',
	Taxi = 'Txi',
	Transit = 'Trnst',
	Walk = 'Wlk',
	Bike = 'Bk',
	Mail = 'Ml',
	BallotBox = 'BltBx',
	Friends = 'Frnd',
	FamilyMembers = 'Fam',
	Coworkers = 'Cowrk',
	Alone = 'Aln',
	Kids = 'Kd',
	Privilege = 'Prvlg',
	Change = 'Chg',
	Habit = 'Hbt',
	Other = 'Oth',
	Excited = 'Exc',
	Concerned = 'Cncrn',
	Shocked = 'Shck',
	Angry = 'Ang',
	Meh = 'Mh',
}

export interface IQuestionAndAnswer {
	questionId: QuestionId;
	answerId: AnswerId;
}

export const enum AppView {
	LandingPage,
	Questionnaire,
	Plan,
}

export const enum MostRecentTransition {
	Back,
	Forward,
}

export enum VotingStateId {
	Colorado,
	Oregon,
	Washington,
}

export function getVotingStateId(answerId: AnswerId): VotingStateId | undefined {
	switch (answerId) {
		case AnswerId.Colorado:
			return VotingStateId.Colorado;

		case AnswerId.Oregon:
			return VotingStateId.Oregon;

		case AnswerId.Washington:
			return VotingStateId.Washington;

		case AnswerId.OtherState:
			return undefined;

		default:
			throw new Error("Unrecognized AnswerId for getVotingStateId");
	}
}

export interface IQuestionnaireState {
	readonly answers: IQuestionAndAnswer[],
	readonly votingStateId: VotingStateId | undefined,
	readonly currentView: AppView,
	readonly currentQuestionId: QuestionId | undefined,
	readonly dotNavStep: number,
	readonly counter: number,
	readonly mostRecentTransition: MostRecentTransition | undefined,
}

export const enum QuestionnaireActionType {
	ANSWER_QUESTION = 'QUESTIONNAIRE/ANSWER_QUESTION',
	START_OVER = 'QUESTIONNAIRE/START_OVER',
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}

export interface IAnswerQuestionPayload {
	questionId: QuestionId;
	answerId: AnswerId;
}

export enum PlanStepId {
	Register,
	RequestOverseasBallot,
	HaveBallot,
	NoBallotYet,
	DontKnowDeadline,
	KnowDeadline,
	MailBallot,
	DropBallotAtDropBox,
	RequestAbsenteeBallot,
	DoubleCheckPollingLocation,
	FindPollingLocation,
	PlanSpecialAccommodations,
	DriveMyselfOrCarpool,
	RideShare,
	Taxi,
	MassTransit,
	WalkOrBike,
	TimeOffWork,
	ReviewBallotIssues,
	ResearchBallotIssues,
	InvitePeople,
	ForMyKidsAndFamily,
	VotingIsPrivilege,
	DriveChange,
	AlwaysVoted,
	OtherReason,
	Excited,
	Concerned,
	Shocked,
	Angry,
	Meh,
}

export interface IQuestion {
    id: QuestionId;
    dotNavStep: number;
    answers: AnswerId[];
    nextQuestionId: (answer: AnswerId) => QuestionId | undefined;
    resultingPlanStep: (answer: AnswerId) => PlanStepId | undefined;
}