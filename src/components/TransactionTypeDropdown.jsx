/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TransactionTypeDropdown({
  typeOfTransaction,
  setTypeOfTransaction,
  totalIncome,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <label htmlFor="choices" className="font-semibold text-md sm:text-lg">
        Choose an option:
      </label>
      <select
        id="choices"
        name="choices"
        value={typeOfTransaction}
        onChange={(e) => setTypeOfTransaction(e.target.value)}
        className="border p-2 rounded-md w-full sm:w-2/3 mt-2 sm:mt-0"
      >
        <option value="Income">Income</option>
        {totalIncome && <option value="Expense">Expense</option>}
      </select>
    </div>
  );
}

export default TransactionTypeDropdown;
