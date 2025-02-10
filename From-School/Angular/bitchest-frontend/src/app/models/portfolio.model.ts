import { CryptoPrice } from './crypto-price.model';  // Importing the updated crypto model

export interface Portfolio {
  id: string;
  userId: string;
  cryptocurrencies: {
    [cryptoId: string]: {
      quantity: number;
      purchasePrice: number;  // Price at which the cryptocurrency was purchased
      currentPrice: CryptoPrice;  // Current price of the cryptocurrency (linked to the CryptoPrice model)
    };
  };
}
