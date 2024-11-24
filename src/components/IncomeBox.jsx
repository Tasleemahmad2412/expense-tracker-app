// import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function IncomeBox({ netAmount }) {
  // Calculate total income

  return (
    <div className="w-full h-full">
      <div className="border-none rounded-lg bg-purple-500 p-4 sm:p-5 w-full h-full flex-shrink-0 ">
        <h2 className="text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg text-yellow-200 lg:text-2xl">
          Income
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-extrabold text-green-300 text-center  ">
          Amount:
          {netAmount} $
        </p>
      </div>
    </div>
  );
}

export default IncomeBox;
