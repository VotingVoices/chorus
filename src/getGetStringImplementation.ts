import { LanguageId } from './store/Types';
import { getEnglishString, getSpanishString, StringId } from './strings';

export function getGetStringImplementation(language: LanguageId): (id: StringId) => string {
	switch (language) {
		case LanguageId.English:
			return getEnglishString;

		case LanguageId.Spanish:
			return getSpanishString;

		default:
			throw new Error(`Unknown LanguageId: ${language}`);
	}
}