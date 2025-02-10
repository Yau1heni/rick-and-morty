export const getSignature = (quantity: number): string => {
  const text = quantity === 1 ? "character" : "characters";
  return `Found ${text}: ${quantity}`;
}