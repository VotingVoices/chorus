import { VotingStateId } from './Types';

export function votingStateFromZip(zipCode: string): VotingStateId | undefined {
	if (zipCode.length !== 5) {
		return undefined;
	}

	if (zipCode.startsWith("97")) {
		return VotingStateId.Oregon;
	}

	if (zipCode.startsWith("80") || zipCode.startsWith("81")) {
		return VotingStateId.Colorado;
	}

	const prefix = zipCode.substring(0, 3);

	if (prefix === "980" ||
		prefix === "981" ||
		prefix === "982" ||
		prefix === "983" ||
		prefix === "984" ||
		prefix === "985" ||
		prefix === "986" ||
		prefix === "987" ||
		prefix === "988" ||
		prefix === "989" ||
		prefix === "990" ||
		prefix === "991" ||
		prefix === "992" ||
		prefix === "993" ||
		prefix === "994") {
		return VotingStateId.Washington;
	}
	
	return undefined;
}