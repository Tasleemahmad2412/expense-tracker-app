import { useState } from "react";
import IncomeBox from "./IncomeBox";
import ExpenseBox from "./ExpenseBox";
import Reason from "./Reason";
import Amount from "./Amount";
import TransactionTypeDropdown from "./TransactionTypeDropdown";
import { useSelector } from "react-redux";
import LeftWingBtn from "./LeftWingBtn";
import { getExpenseAmount, getIncomeAmount } from "../transactionSlice";

function LeftWing() {
  // / Get income and expense data from Redux store
  const income = useSelector(getIncomeAmount);
  const expense = useSelector(getExpenseAmount);

  // Calculate total income
  const totalIncome = income.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  // Calculate total expense
  const totalExpense = expense.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  // Calculate remaining balance after expenses
  const netAmount = totalIncome - totalExpense;

  const [amount, setAmount] = useState();
  const [reason, setReason] = useState("");
  const [typeOfTransaction, setTypeOfTransaction] = useState("Income");

  return (
    <div className="border rounded-lg p-4 sm:p-5 mt-4 sm:mt-5 mx-2 sm:ml-5 flex flex-col w-[100%]">
      <h1 className="text-yellow-50 font-semibold text-lg sm:text-xl md:text-2xl text-left w-fit">
        Expenses and Income Section
      </h1>

      <div className="flex lg:flex-col gap-4 sm:gap-5 sm:flex-row flex-wrap p-4">
        <IncomeBox totalIncome={totalIncome} netAmount={netAmount} />
        <ExpenseBox totalExpense={totalExpense} />
      </div>

      {/* Add the transaction */}
      <div className="w-full">
        <h2 className="text-lg text-wrap font-bold text-yellow-200 mb-4 sm:mb-5 mt-4 sm:mt-5 sm:text-sm md:text-sm lg:text-lg">
          Add the Expense/Income:
        </h2>

        <div className="flex flex-col gap-4 text-white w-full">
          <Reason reason={reason} setReason={setReason} />

          <Amount amount={amount} setAmount={setAmount} />

          <TransactionTypeDropdown
            totalIncome={totalIncome}
            typeOfTransaction={typeOfTransaction}
            setTypeOfTransaction={setTypeOfTransaction}
          />
          {amount && reason && (
            <LeftWingBtn
              amount={amount}
              setAmount={setAmount}
              reason={reason}
              setReason={setReason}
              typeOfTransaction={typeOfTransaction}
              setTypeOfTransaction={setTypeOfTransaction}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftWing;
