import { AnswerId, QuestionId, PlanStepId, VotingStateId } from './store';

export function getQuestionFullLabel(id: QuestionId): string {
	switch (id) {
		case QuestionId.AreYouRegistered:
			return 'First things first. Are you registered to vote?';

		case QuestionId.OverseasMilitary:
			return 'Do you live or are you stationed outside the United States?';

		case QuestionId.VoteByMailState:
			return 'Are you planning to vote in any of these states?';

		case QuestionId.AbsenteeBallot:
			return 'Would you like to vote by absentee ballot?';

		case QuestionId.PollingLocation:
			return 'Do you know where your polling location is?';

		case QuestionId.SpecialAccommodations:
			return 'Will you need special accommodations to reach the polling location?';

		case QuestionId.TransportationMethod:
			return 'How will you get to your polling location?';

		case QuestionId.ReceivedBallot:
			return 'Have you received your ballot?';

		case QuestionId.Deadline:
			return 'Do you know when the deadline is?';

		case QuestionId.ReturnMethod:
			return 'How will you return your ballot?';

		case QuestionId.MissWork:
			return 'Will you have to miss/leave work to vote?';

		case QuestionId.FamiliarWithBallot:
			return 'Do you know who/what you\'ll be voting for?';

		case QuestionId.PeopleToInvite:
			return 'Spread the word! Are there people in your life you\'d like to vote with?';

		case QuestionId.ReasonToVote:
			return 'Why will you be voting?';

		case QuestionId.Emotion:
			return 'How are you feeling about these midterm elections?';
	}

	throw new Error('Unrecognized QuestionId');
}

export function getAnswerLabel(answer: AnswerId): string {
	switch(answer) {
		case AnswerId.Yes:
			return 'Yes';

		case AnswerId.No:
			return 'No';

		case AnswerId.DontKnow:
			return 'Not sure';

		case AnswerId.Washington:
			return 'Washington';

		case AnswerId.Oregon:
			return 'Oregon';

		case AnswerId.Colorado:
			return 'Colorado';

		case AnswerId.OtherState:
			return 'Another state';

		case AnswerId.DriveMyself:
			return 'Drive myself';

		case AnswerId.Carpool:
			return 'Carpool';

		case AnswerId.RideShare:
			return 'Car for hire';

		case AnswerId.Taxi:
			return 'Taxi';

		case AnswerId.Transit:
			return 'Mass transit';

		case AnswerId.Walk:
			return 'Walk';

		case AnswerId.Bike:
			return 'Bike';

		case AnswerId.Mail:
			return 'Mail';

		case AnswerId.BallotBox:
			return 'Ballot box';

		case AnswerId.Friends:
			return 'Friend(s)';

		case AnswerId.FamilyMembers:
			return 'Family member(s)';

		case AnswerId.Coworkers:
			return 'Co-worker(s)';
		
		case AnswerId.Alone:
			return 'Not at this time';

		case AnswerId.Kids:
			return 'My kids / family';

		case AnswerId.Privilege:
			return 'It\'s a privilege';

		case AnswerId.Change:
			return 'To drive change';

		case AnswerId.Habit:
			return 'I\'ve always voted';

		case AnswerId.Other:
			return 'Other';

		case AnswerId.Excited:
			return 'Excited';

		case AnswerId.Concerned:
			return 'Concerned';

		case AnswerId.Shocked:
			return 'Shocked';

		case AnswerId.Angry:
			return 'Angry';

		case AnswerId.Meh:
			return 'Meh';
	}

	throw new Error(`Unrecognized AnswerId: ${answer}`);
}

export function getPlanPageSubHeaderText(): string {
	return "Now you've got everything you need to take voting action. You've done the prep to get your info on registration, your ballot, who/what/where, voting logistics, and more \u2014 way to go! Your voice matters. The time is now. Get out there and vote the midterms!";
}

export interface IPlanStepStrings {
	header: string,
	text: string,
	callToAction: string | undefined,
	link: string | undefined,
}

export function getPlanStepStrings(step: PlanStepId, state: VotingStateId): IPlanStepStrings {
	switch (step) {
		case PlanStepId.Register: {
			return {
				header: "Is your registration A-OK?",
				text: "Let's do this: get registered!",        // TODO: Capitalize Get?
				callToAction: "Double-check your registration",
				link: "https://www.rockthevote.org/voting-information/am-i-registered-to-vote/",        // TODO: Spanish-specific links?
			};
		}

		case PlanStepId.CheckRegistration: {
			return {
				header: "Check your registration",
				text: "Great \u2014 you're registered! Now take a quick look to make sure everything is up-to-date.",
				callToAction: "Double-check your registration",
				link: "https://www.rockthevote.org/voting-information/am-i-registered-to-vote/",
			};
		}

		case PlanStepId.MaybeRegister: {
			return {
				header: "Check your registration",
				text: "Not sure whether you're registered? Take a minute to double-check and make sure you're vote ready.",
				callToAction: "Double-check your registration",
				link: "https://www.rockthevote.org/voting-information/am-i-registered-to-vote/",
			};
		}

		case PlanStepId.RequestOverseasBallot: {
			return {
				header: "Request your absentee ballot",
				text: "Learn how to vote from anywhere when you're overseas.",
				callToAction: "Make the request",
				link: "https://www.fvap.gov/",
			}
		}

		case PlanStepId.HaveBallot: {
			return {
				header: "Have ballot, will vote!",
				text: "You've got it, now submit it. (Don't forget to check the postage requirements if you're using USPS.)",    // TODO: Spell out U.S. Postal Service?
				callToAction: undefined,
				link: undefined,
			};
		}

		case PlanStepId.NoBallotYet: {
			let callToAction: string | undefined;
			let link: string | undefined;

			// TODO: Do we want to use an outgoing link for our metrics purposes?
			// TODO: Also do we want to use a "link ID" concept, similar to string IDs, to make links easier to manage?
						
			switch (state) {
				case VotingStateId.Colorado: {
					callToAction = "Find your Colorado ballot";
					link = "http://www.sos.state.co.us/pubs/elections/vote/VoterHome.html";
					break;
				}
				case VotingStateId.Oregon: {
					callToAction = "Find your Oregon ballot";
					link = "https://sos.oregon.gov/voting/pages/myvote.aspx?lang=en";        // TODO: lang=es
					break;
				}
				case VotingStateId.Washington: {
					callToAction = "Find your Washington ballot";
					link = "https://weiapplets.sos.wa.gov/myvote/#/login";
					break;
				}
				default:
					throw new Error("Unrecognized VotingStateId");
			}

			return {
				header: "Ballot hasn't shown up yet?",
				text: "Track your ballot online and find out when to expect it.",
				callToAction,
				link,
			}
		}

		case PlanStepId.DontKnowDeadline:
		case PlanStepId.KnowDeadline: {
			let link: string | undefined;

			switch (state) {
				case VotingStateId.Colorado: {
					link = "https://www.sos.state.co.us/pubs/elections/";
					break;
				}
				case VotingStateId.Oregon: {
					link = "https://sos.oregon.gov/voting/Pages/current-election.aspx";
					break;
				}
				case VotingStateId.Washington: {
					link = "https://www.sos.wa.gov/elections/dates-and-deadlines.aspx";
					break;
				}
				default:
					throw new Error("Unrecognized VotingStateId");
			}

			return {
				header: step === PlanStepId.DontKnowDeadline ? "When is the deadline, exactly?" : "The deadline: you've got this",
				text: "Midnight ballot box drop or postmark? Quickly double-check your deadline and rest easy.",
				callToAction: "Check your deadline",
				link
			}
		}

		case PlanStepId.MailBallot: {
			let text: string = "Check up on your deadline and rest easy. (And don't forget postage if your ballot envelope is not prepaid.)";
			let callToAction: string | undefined;
			let link: string | undefined;

			switch (state) {
				case VotingStateId.Colorado: {
					callToAction = "Find Colorado mailing details";
					link = "https://www.sos.state.co.us/pubs/elections/FAQs/GeneralInfoFAQ.html";
					break;
				}
				case VotingStateId.Oregon: {
					callToAction = "Find Oregon mailing details";
					link = "https://sos.oregon.gov/voting/Pages/voteinor.aspx";
					break;
				}
				case VotingStateId.Washington: {
					// WA has prepaid postage
					text = "Check up on your deadline and rest easy.";

					callToAction = "Find Washington mailing details";
					link = "https://www.sos.wa.gov/elections/faq_vote_by_mail.aspx";
					break;
				}
				default:
					throw new Error("Unrecognized VotingStateId");
			}

			return {
				header: "Drop your ballot in the mail, pronto!",
				text,
				callToAction,
				link,
			}
		}

		case PlanStepId.DropBallotAtDropBox: {
			let link: string | undefined;

			switch (state) {
				case VotingStateId.Colorado: {
					link = "https://www.sos.state.co.us/pubs/elections/";
					break;
				}
				case VotingStateId.Oregon: {
					link = "https://sos.oregon.gov/voting/pages/drop-box-locator.aspx";
					break;
				}
				case VotingStateId.Washington: {
					link = "https://www.sos.wa.gov/elections/auditors/";
					break;
				}
				default:
					throw new Error(`Unrecognized VotingStateId: ${state}`);
			}

			return {
				header: "Discover your neighborhood ballot drop box.",
				text: "Check your deadline and plan ahead for a convenient ballot box drop.",
				callToAction: "Find a ballot drop box near you",
				link,
			}
		}

		case PlanStepId.RequestAbsenteeBallot: {
			return {
				header: "Request your absentee ballot",
				text: "A convenient way to go! Just remember to check on postage and your mailing deadline.",
				callToAction: "Make the request",
				link: "https://www.vote.org/absentee-ballot/",
			}
		}

		case PlanStepId.DoubleCheckPollingLocation: {
			return {
				header: "Your polling location: has it moved?",
				text: "Things change \u2014 make sure you're aware of your area's best polling locations and hours.",
				callToAction: "This way to the polls!",
				link: "https://www.vote.org/polling-place-locator/",
			}
		}

		case PlanStepId.FindPollingLocation: {
			return {
				header: "Find your polling location",
				text: "Make it easy on yourself! Find your polling location through the link below.",
				callToAction: "This way to the polls!",
				link: "https://www.vote.org/polling-place-locator/",
			}
		}

		case PlanStepId.PlanSpecialAccommodations: {
			return {
				header: "Plan your trip, with the assistance you need",
				text: "Special accommodations to help you get to your polling place are available. It's easy to plan ahead!",
				callToAction: "Access assistance",
				link: "https://www.eac.gov/voters/resources-for-voters-with-disabilities/",
			}
		}

		case PlanStepId.DriveMyselfOrCarpool: {
			return {
				header: "Get there by car",
				text: "Great plan. Even better: Round up some fellow voters to share the ride, and have the address in hand!",
				callToAction: "Plan your route to the polls",
				link: "https://www.vote.org/polling-place-locator/",
			}
		}

		case PlanStepId.RideShare: {
			return {
				// TODO: Update these strings to use "Ride to Vote".  Also, the link may need to be updated.
				header: "Get there by car",
				text: "Great plan. Even better: Round up some fellow voters to share the ride!",
				callToAction: "Check Lyft for voting day deals",
				link: "https://blog.lyft.com/posts/2018/8/22/get-out-the-vote",
			}
		}

		case PlanStepId.Taxi: {
			return {
				header: "Get there by taxi",
				text: "Great plan. Even better: Round up some fellow voters to share the ride, and have the address in hand!",
				callToAction: "Plan your route to the polls",
				link: "https://www.vote.org/polling-place-locator/",
			}
		}

		case PlanStepId.MassTransit: {
			return {
				header: "Take mass transit to the polls",
				text: "Great plan. Even better: Plan your route ahead of time and enjoy the trip!",
				callToAction: "Plan your bus/train route",
				link: "https://maps.google.com/landing/transit/index.html",
			}
		}

		case PlanStepId.WalkOrBike: {
			return {
				header: "Walk or bike to the polls",
				text: "Rain, snow, sleet...no worries! You'll be ready with a quick weather report.",
				callToAction: "Check voting day conditions",
				link: "weather.com",    // TODO: No http?
			}
		}

		case PlanStepId.TimeOffWork: {
			return {
				header: "Paid time-off to vote: are you eligible?",
				text: "The majority of states have time-off-to-vote laws (also called voter-leave laws). Check ahead of voting day and coordinate plans with your workplace.",
				callToAction: "Look for your state's voter-leave law status",
				link: "https://www.vote411.org/taxonomy/term/75#.W5RxBuhKjD4",        // TODO: Is this really the URL?
			}
		}

		case PlanStepId.ReviewBallotIssues: {
			return {
				header: "Your ballot, in a nutshell",
				text: "You're familiar with the candidates and issues. The Ballot Ready app can help you make informed choices.",
				callToAction: "Plan your ballot choices",
				link: "https://www.ballotready.org/",
			}
		}

		case PlanStepId.ResearchBallotIssues: {
			return {
				header: "Introducing...your ballot!",
				text: "Now's the perfect time to research the candidates and issues you'll be voting for. The Ballot Ready app can help you make informed choices.",
				callToAction: "Plan your ballot choices",
				link: "https://www.ballotready.org/",
			}
		}

		case PlanStepId.InvitePeople: {
			return {
				header: "Invite your crowd to vote with you",    // TODO: Review: "your crowd?",
				text: "Let's keep each other accountable \u2014 voting's even better when we can do it together!",
				callToAction: undefined,
				link: undefined,
			}
		}

		case PlanStepId.Excited:
		case PlanStepId.Concerned:
		case PlanStepId.Shocked:
		case PlanStepId.Angry:
		case PlanStepId.Meh: {
			let header = "Put those feelings toward action";
			let text: string | undefined;
			const callToAction: string | undefined = "See what happens When We All Vote";
			const link: string | undefined = "https://www.whenweallvote.org/";

			switch (step) {
				case PlanStepId.Excited: {
					header = "You're excited about voting!";
					text = "Well, great \u2014 you're not the only one! Watch this and keep participating!";
					break;
				}
				case PlanStepId.Concerned: {
					header = "Put those feelings toward voting action";
					text = "You're feeling concerned \u2014 we get it! These are complicated times. Watch this and get inspired.";
					break;
				}
				case PlanStepId.Shocked: {
					text = "You're feeling shocked \u2014 we get it! These are complicated times. Watch this and get inspired.";
					break;
				}
				case PlanStepId.Angry: {
					text = "You're feeling angry \u2014 we get it! These are complicated times. Watch this and get inspired.";
					break;
				}
				case PlanStepId.Meh: {
					text = "Feeling ambivalent? Your voting plans are taking shape \u2014 now get out there!";
					break;
				}
				default:
					throw new Error(`Unrecognized PlanStepId: ${step}`);
			}

			return {
				header,
				text: text!,
				callToAction,
				link,
			}
		}
		default:
			throw new Error(`Unrecognized PlanStepId: ${step}`);
	}
}

export function planStepHeaderFormattedString(index: number, header: string) {
	return `Step ${index + 1}: ${header}`;
}

export interface IReasonToVoteStrings {
	header: string,
	reasonText: string,
	bodyText: string,
}

export function getReasonToVoteStrings(planStepId: PlanStepId): IReasonToVoteStrings {
	const header = "Remember your reason for voting!";

	switch (planStepId) {
		// TODO: Should these strings just say "Family", "Change", etc.?
		case PlanStepId.ForMyKidsAndFamily: {
			return {
				header,
				reasonText: "For Family",
				bodyText: "Whether you're looking out for the next generation or for your family members today, you're right: your vote has an impact!"
			}
		}

		case PlanStepId.VotingIsPrivilege: {
			return {
				header,
				reasonText: "It's My Privilege",
				bodyText: "Yep, you've got the right idea, and we agree. Let's not take voting for granted!",
			}
		}

		case PlanStepId.DriveChange: {
			return {
				header,
				reasonText: "For Change",
				bodyText: "You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!",
			}
		}

		case PlanStepId.AlwaysVoted: {
			return {
				header,
				reasonText: "Civic Duty",
				bodyText: "You've always voted \u2014 good on you! Spread the word and keep up the great (and extremely important) civic habit.",
			}
		}

		case PlanStepId.OtherReason: {
			return {
				header,
				reasonText: "Civic Duty",
				bodyText: "You're about to do the single best thing you can to weigh in on issues and decision-makers. Do you approve? Disapprove? Your vote is a meaningful message \u2014 pass it on!",
			}
		}

		default: {
			throw new Error("Unhandled PlanStepId");
		}
	}
}

export interface IPlanEmotionStrings {
	header: string,
	text: string,
}

export function getEmojiAltText(planStepId: PlanStepId): string {
	switch (planStepId) {
		case PlanStepId.Excited: {
			return "Excited emoji";
		}
		case PlanStepId.Concerned: {
			return "Concerned emoji";
		}
		case PlanStepId.Shocked: {
			return "Shocked emoji";
		}
		case PlanStepId.Angry: {
			return "Angry emoji";
		}
		case PlanStepId.Meh: {
			return "Meh emoji";
		}
		default: {
			throw new Error("Unhandled PlanStepId");
		}
	}
}