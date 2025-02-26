import {REQUIRED_LENGTH_SEARCH_TERMS} from "@/constants";

export const getSignature = (quantity: number, terms: string): string => {
  const isValidSearchTerms = terms.length <= REQUIRED_LENGTH_SEARCH_TERMS && terms.length > 0

  if (isValidSearchTerms) {
    return `Please enter more than ${REQUIRED_LENGTH_SEARCH_TERMS} characters`;
  } else {
    const text = quantity === 1 ? "character" : "characters";
    return `Found ${text}: ${quantity}`;
  }
}
