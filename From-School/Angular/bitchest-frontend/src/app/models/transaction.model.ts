import { CryptoPrice } from './crypto-price.model';  // Importing the CryptoPrice model

export interface Transaction {
  id: string;
  userId: string;
  cryptoId: string;  // The ID of the cryptocurrency involved in the transaction
  transactionType: 'buy' | 'sell';  // Whether it's a buy or sell transaction
  quantity: number;  // Amount of cryptocurrency traded
  priceAtTransaction: number;  // Price of the cryptocurrency at the time of the transaction
  transactionDate: Date;  // Date of the transaction
  currentPrice: CryptoPrice;  // Current price of the cryptocurrency (linked to the CryptoPrice model)
}
