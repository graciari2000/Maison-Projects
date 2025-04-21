import { Portfolio } from "./portfolio.model";
import { Transaction } from "./transaction.model";

export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // You may choose to exclude this in the frontend for security
  portfolio: Portfolio;  // Reference to the user's portfolio
  transactions: Transaction[]; // List of transactions related to the user
}
