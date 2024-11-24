import { useDispatch, useSelector } from "react-redux";
import { removeTransaction } from "../transactionSlice";

function ListComponent() {
  const dispatch = useDispatch();
  const transactionObj = useSelector((state) => state.transaction.transactions);
  // console.log(transactionObj);

  return (
    <div className="flex flex-col gap-2">
      {transactionObj.length > 0 ? (
        transactionObj.map((obj, index) => (
          <div
            key={index}
            className={`flex flex-row gap-4 justify-between align-middle bg-white text-black p-3 overflow-hidden rounded-md ${
              obj.typeOfTransaction === "Expense"
                ? "border-r-8 border-r-red-500"
                : obj.typeOfTransaction === "Income"
                ? "border-r-8 border-r-green-500"
                : ""
            }`}
          >
            <div className="flex flex-row gap-5">
              <p className="font-bold">{index + 1}.</p>
              <p className="font-bold text-md">{obj.description}</p>
            </div>
            <div className="flex gap-10 align-middle sm:gap-5">
              <p className="text-md font-bold sm:text-sm">{obj.amount} $</p>
              <button
                className="bg-indigo-500 pr-2 pl-2 border-none rounded-md cursor-pointer"
                onClick={() => {
                  dispatch(removeTransaction({ id: obj.id }));
                }}
              >
                X
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Nothing to show</p>
      )}
    </div>
  );
}

export default ListComponent;
