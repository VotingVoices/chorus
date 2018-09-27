import { AnswerId, IQuestion, QuestionId } from './Types';

/**
 * Hard coded constant for the question graph 
 */
export const QUESTIONS : IQuestion[] = [
    {
        id: QuestionId.AreYouRegistered,
        dotNavStep: 1,
        nextQuestionId: (answer) => QuestionId.VoteByMailState,
        answers: [
            AnswerId.EmphaticYes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
    },
    {
        id: QuestionId.VoteByMailState,
        dotNavStep: 2,
        nextQuestionId: (key) => key === AnswerId.OtherState ? QuestionId.PollingLocation : QuestionId.ReceivedBallot,
        answers: [
            AnswerId.Colorado,
            AnswerId.Oregon,
            AnswerId.Washington,
            AnswerId.OtherState,
        ],
    },
    /* VOTE-IN-PERSON PATH */
    {
        id: QuestionId.PollingLocation,
        dotNavStep: 3,
        nextQuestionId: (key) => QuestionId.SpecialAccommodations,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
    },
    {
        id: QuestionId.SpecialAccommodations,
        dotNavStep: 4,
        nextQuestionId: (key) => QuestionId.TransportationMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.TransportationMethod,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.AbsenteeBallot,
        answers: [
            AnswerId.DriveMyself,
            AnswerId.RideShare,
            AnswerId.Transit,
            AnswerId.WalkOrBike,
            AnswerId.Other,
        ],
    },
    {
        id: QuestionId.AbsenteeBallot,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.MissWork,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.MissWork,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    /* VOTE-BY-MAIL PATH */
    {
        id: QuestionId.ReceivedBallot,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.Deadline,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ]
    },
    {
        id: QuestionId.Deadline,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.ReturnMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ]
    },
    {
        id: QuestionId.ReturnMethod,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Mail,
            AnswerId.BallotBox,
        ]
    },
    /* REJOINED PATH */
    {
        id: QuestionId.FamiliarWithBallot,
        dotNavStep: 8,
        nextQuestionId: (key) => QuestionId.PeopleToInvite,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
    },
    {
        id: QuestionId.PeopleToInvite,
        dotNavStep: 9,
        nextQuestionId: (key) => QuestionId.ReasonToVote,
        answers: [
            AnswerId.Friends,
            AnswerId.FamilyMembers,
            AnswerId.Coworkers,
            AnswerId.Alone,
        ],
    },
    {
        id: QuestionId.ReasonToVote,
        dotNavStep: 10,
        nextQuestionId: (key) => QuestionId.Emotion,
        answers: [
            AnswerId.Kids,
            AnswerId.Privilege,
            AnswerId.Change,
            AnswerId.Habit,
            AnswerId.Other,
        ]
    },
    {
        id: QuestionId.Emotion,
        dotNavStep: 11,
        nextQuestionId: (key) => undefined,
        answers: [
            AnswerId.Excited,
            AnswerId.Concerned,
            AnswerId.Shocked,
            AnswerId.Angry,
            AnswerId.Meh,
        ],
    }];

export const PLAN_DOT_NAV_STEP = 12;