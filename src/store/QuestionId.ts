export enum QuestionId {
    AreYouRegistered = 'Reg',
    VoteByMailState = 'St',
    PollingLocation = 'PllLoc',
    SpecialAccommodations = 'Accm',
    TransportationMethod = 'Trns',
    AbsenteeBallot = 'Abs',
    MissWork = 'MssWrk',
    FamiliarWithBallot = 'Fmlr',
    PeopleToInvite = 'Inv',
    Emotion = 'Em',
}

export const ALL_QUESTION_IDS: QuestionId[] = [
    QuestionId.AreYouRegistered,
    QuestionId.VoteByMailState,
    QuestionId.PollingLocation,
    QuestionId.SpecialAccommodations,
    QuestionId.TransportationMethod,
    QuestionId.AbsenteeBallot,
    QuestionId.MissWork,
    QuestionId.FamiliarWithBallot,
    QuestionId.PeopleToInvite,
    QuestionId.Emotion,
];