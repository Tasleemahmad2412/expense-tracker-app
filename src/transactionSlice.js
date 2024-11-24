import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "Transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push({
        id: nanoid(),
        amount: action.payload.amount,
        description: action.payload.description,
        typeOfTransaction: action.payload.typeOfTransaction,
      });
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
    },
  },
});

// Selector functions to get income and expense transactions
export const getIncomeAmount = (state) => {
  const transactions = state?.transaction?.transactions || []; // Ensure transactions exists
  return transactions.filter(
    (transaction) => transaction.typeOfTransaction === "Income"
  );
};

export const getExpenseAmount = (state) => {
  const transactions = state?.transaction?.transactions || []; // Ensure transactions exists
  return transactions.filter(
    (transaction) => transaction.typeOfTransaction === "Expense"
  );
};

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
