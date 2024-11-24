// import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Reason({ reason, setReason }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <label className="font-semibold text-md sm:text-lg">Reason:</label>
      <input
        type="text"
        id="reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="border p-2 rounded-md w-full sm:w-2/3 mt-2 sm:mt-0"
      />
    </div>
  );
}

export default Reason;
