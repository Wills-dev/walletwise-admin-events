export const calculateTotalPrice = (quantity: number, price?: string) => {
  if (!price) return "0k";
  const normalized = price.toUpperCase().trim();

  let numericValue = 0;

  if (normalized.endsWith("K")) {
    numericValue = parseFloat(normalized) * 1_000;
  } else if (normalized.endsWith("M")) {
    numericValue = parseFloat(normalized) * 1_000_000;
  } else {
    numericValue = Number(normalized);
  }

  const total = numericValue * quantity;

  if (total >= 1_000_000) {
    return `${(total / 1_000_000).toFixed(total % 1_000_000 === 0 ? 0 : 2)}M`;
  }

  if (total >= 1_000) {
    return `${(total / 1_000).toFixed(total % 1_000 === 0 ? 0 : 2)}K`;
  }

  return `${total}`;
};
