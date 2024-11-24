// import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Amount({ amount, setAmount }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <label className="font-semibold text-md sm:text-lg">Add Amount:</label>
      <input
        type="number"
        id="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 rounded-md w-full sm:w-2/3 mt-2 sm:mt-0"
      />
    </div>
  );
}

export default Amount;
