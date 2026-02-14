
export const getKitchenSlogan = async (): Promise<string> => {
  return "Crave the flavor, eat with joy, and repeat the memories.";
};

export const getAIPun = async (foodName: string): Promise<string> => {
  const puns: Record<string, string> = {
    pizza: "It's not a pie-fessional opinion, but you'll love it!",
    burger: "Lettuce celebrate this burger masterpiece!",
    pasta: "That's pasta-bly the best dish here!",
    chicken: "This dish is im-peck-able!",
    salad: "Lettuce take a moment to appreciate this!",
    fish: "That's one fin-tastic meal!",
  };

  const foodLower = foodName.toLowerCase();
  return puns[foodLower] || "Chef's kiss choice!";
};
