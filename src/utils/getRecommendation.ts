const getRecommendation = (amount: number): string => {
  if (amount >= 800 && amount <= 850) return "buy";
  if (amount >= 851 && amount <= 930) return "hold";
  return "sell";
};

export { getRecommendation };
