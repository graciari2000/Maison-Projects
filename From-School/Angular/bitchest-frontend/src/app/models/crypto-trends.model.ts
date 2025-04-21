export interface CryptoTrends {
  cryptoId: string;
  trends: {
    [timestamp: string]: {
      price: number;  // Price of the cryptocurrency at that specific time
      percentageChange: number;  // Percentage change compared to the previous price
    };
  };
}
