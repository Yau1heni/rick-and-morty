const REQUIRED_LENGTH = 3

export const getSignature = (quantity: number, terms: string): string => {
  const isValidSearchTerms = terms.length <= REQUIRED_LENGTH && terms.length > 0

  if (isValidSearchTerms) {
    return `Please enter more than ${REQUIRED_LENGTH} characters`;
  } else {
    const text = quantity === 1 ? "character" : "characters";
    return `Found ${text}: ${quantity}`;
  }
}
