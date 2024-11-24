/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addTransaction } from "../transactionSlice";

function LeftWingBtn({
  reason,
  amount,
  typeOfTransaction,
  setAmount,
  setReason,
  setTypeOfTransaction,
}) {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-purple-600 p-2 border-none rounded-md"
      onClick={() => {
        dispatch(
          addTransaction({
            amount: amount,
            description: reason,
            typeOfTransaction: typeOfTransaction,
          })
        );
        setAmount(0); // Clear input after submission
        setReason("");
        setTypeOfTransaction("Income");
      }}
    >
      Add Transaction
    </button>
  );
}

export default LeftWingBtn;
