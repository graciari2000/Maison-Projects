export interface CryptoPrice {
  cryptoId: string;
  currentPrice: number;  // The latest price of the cryptocurrency
  timestamp: Date;       // Timestamp of the price
}
