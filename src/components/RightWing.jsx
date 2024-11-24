import ListComponent from "./ListComponent";

function RightWing() {
  return (
    <div className="border rounded-lg p-5 sm:p-10 mt-5 sm:mt-10 ml-0 sm:ml-5 flex flex-col justify-center align-middle flex-grow">
      <h2 className="text-yellow-50 font-semibold text-xl sm:text-2xl text-left max-w-fit mb-5 sm:mb-7">
        List of Expense/Income
      </h2>
      <div>
        <ul className="list-disc pl-5 text-white text-lg sm:text-xl ">
          {<ListComponent />}
        </ul>
      </div>
    </div>
  );
}

export default RightWing;
