import { AnswerId, IQuestion, IZipCodeAnswer, PlanStepId, QuestionId } from './Types';
import { votingStateFromZip } from './votingStateFromZip';

/**
 * Hard coded constant for the question graph 
 */
export const QUESTIONS : IQuestion[] = [
    {
        id: QuestionId.AreYouRegistered,
        dotNavStep: 1,
        nextQuestionId: (answer) => QuestionId.ZipCode,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.CheckRegistration : (answer === AnswerId.No ? PlanStepId.Register : PlanStepId.MaybeRegister),
    },
    {
        id: QuestionId.ZipCode,
        dotNavStep: 2,
        nextQuestionId: (answer) => {
            const zipCode = (answer as IZipCodeAnswer).zipCode;
            if (zipCode === undefined) {
                return undefined;
            }

            const voteByMailState = votingStateFromZip(zipCode);
            if (voteByMailState !== undefined) {
                return QuestionId.ReceivedBallot;
            }
            else {
                return QuestionId.VotingMethod;
            }
        },
        answers: [],
        resultingPlanStep: (answer) => {
            const zipCode = (answer as IZipCodeAnswer).zipCode;
            if (zipCode === undefined) {
                return undefined;
            }

            const voteByMailState = votingStateFromZip(zipCode);
            if (voteByMailState !== undefined) {
                return PlanStepId.CheckBallotReturnDeadline;
            }
            else {
                return undefined;
            }
        },
    },
    /* VOTE-IN-PERSON PATH */
    {
        id: QuestionId.VotingMethod,
        dotNavStep: 3,
        nextQuestionId: (key) => key === AnswerId.Absentee ? QuestionId.FamiliarWithBallot : QuestionId.PollingLocation,
        answers: [
            AnswerId.AtPolls,
            AnswerId.VoteEarly,
            AnswerId.Absentee,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.VoteEarly ? PlanStepId.FindOutWhereToVoteEarly : (answer === AnswerId.Absentee ? PlanStepId.RequestAbsenteeBallot : undefined),
    },
    {
        id: QuestionId.PollingLocation,
        dotNavStep: 4,
        nextQuestionId: (key) => QuestionId.SpecialAccommodations,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
            AnswerId.DontKnow,
        ],
        resultingPlanStep: (answer) => answer !== AnswerId.Yes ? PlanStepId.FindPollingLocation : undefined,
    },
    {
        id: QuestionId.SpecialAccommodations,
        dotNavStep: 5,
        nextQuestionId: (key) => QuestionId.TransportationMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.PlanSpecialAccommodations : undefined,
    },
    {
        id: QuestionId.TransportationMethod,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.MissWork,
        answers: [
            AnswerId.DriveMyself,
            AnswerId.Carpool,
            AnswerId.RideShare,
            AnswerId.Taxi,
            AnswerId.Transit,
            AnswerId.WalkOrBike,
            AnswerId.Other,
        ],
        resultingPlanStep: (answer) => {
            switch (answer) {
                case AnswerId.DriveMyself: {
                    return PlanStepId.DriveMyself;
                }
                case AnswerId.Carpool: {
                    return PlanStepId.Carpool;
                }
                case AnswerId.RideShare: {
                    return PlanStepId.RideShare;
                }
                case AnswerId.Taxi: {
                    return PlanStepId.Taxi;
                }
                case AnswerId.Transit: {
                    return PlanStepId.MassTransit;
                }
                case AnswerId.Walk:
                case AnswerId.Bike:
                case AnswerId.WalkOrBike: {
                    return PlanStepId.WalkOrBike;
                }
                default:
                    return undefined;
            }
        },
    },
    {
        id: QuestionId.MissWork,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.TimeOffWork : undefined,
    },
    /* VOTE-BY-MAIL PATH */
    {
        id: QuestionId.ReceivedBallot,
        dotNavStep: 6,
        nextQuestionId: (key) => QuestionId.ReturnMethod,
        answers: [
            AnswerId.Yes,
            AnswerId.No,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? undefined : PlanStepId.NoBallotYet,
    },
    {
        id: QuestionId.ReturnMethod,
        dotNavStep: 7,
        nextQuestionId: (key) => QuestionId.FamiliarWithBallot,
        answers: [
            AnswerId.Mail,
            AnswerId.BallotBox,
        ],
        resultingPlanStep: (answer) => answer === AnswerId.Mail ? PlanStepId.MailBallot : PlanStepId.DropBallotAtDropBox,
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
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.ReviewBallotIssues : PlanStepId.ResearchBallotIssues,
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
        resultingPlanStep: (answer) => answer !== AnswerId.Alone ? PlanStepId.InvitePeople : undefined,
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
        ],
        resultingPlanStep: (answer) => {
            switch (answer) {
                case AnswerId.Kids: {
                    return PlanStepId.ForMyKidsAndFamily;
                }
                case AnswerId.Privilege: {
                    return PlanStepId.VotingIsPrivilege;
                }
                case AnswerId.Change: {
                    return PlanStepId.DriveChange;
                }
                case AnswerId.Habit: {
                    return PlanStepId.AlwaysVoted;
                }
                case AnswerId.Other: {
                    return PlanStepId.OtherReason;
                }
                default:
                    return undefined;
            }
        }
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
        resultingPlanStep: (answer) => {
            switch (answer) {
                case AnswerId.Excited: {
                    return PlanStepId.Excited;
                }
                case AnswerId.Concerned: {
                    return PlanStepId.Concerned;
                }
                case AnswerId.Shocked: {
                    return PlanStepId.Shocked;
                }
                case AnswerId.Angry: {
                    return PlanStepId.Angry;
                }
                case AnswerId.Meh: {
                    return PlanStepId.Meh;
                }
                default:
                    return undefined;
            }
        },
    },

    // DEPRECATED QUESTIONS
    // These are here so that we can still generate plan steps for old plan URLs that refer to deprecated questions.

    // QuestionId.VoteByMailState is not included here, because it was only used to choose which path to follow; it didn't
    // generate any plan steps on its own.
    {
        id: QuestionId.AbsenteeBallot,
        dotNavStep: 0,
        nextQuestionId: (answer) => undefined,
        answers: [],
        resultingPlanStep: (answer) => answer === AnswerId.Yes ? PlanStepId.RequestAbsenteeBallot : undefined
    }];

export const PLAN_DOT_NAV_STEP = 12;