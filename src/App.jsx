import { useState } from "react";
import LeftWing from "./components/LeftWing";
import RightWing from "./components/RightWing";

function App() {
  const [dark, setDark] = useState(true);
  function handleLightDarkMode() {
    setDark(!dark);
  }

  return (
    <div className={`min-h-screen ${dark ? "" : "negate-colors"}`}>
      <h1 className="bg-purple-600 text-white font-bold text-3xl text-center p-5 sticky top-0 flex flex-row justify-between">
        <div>Expense Tracker</div>
        <button onClick={handleLightDarkMode}>{dark ? "🌑" : "☀️"}</button>
      </h1>
      <div className="flex flex-row gap-5 p-5 max-[470px]:flex-col  ">
        {/* Set LeftWing to a fixed width */}
        <div className="w-[40%] max-[470px]:w-full">
          <LeftWing />
        </div>

        {/* RightWing will expand to take up the remaining space */}
        <div className="flex-grow">
          <RightWing />
        </div>
      </div>
    </div>
  );
}

export default App;
