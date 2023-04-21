import React, { useState } from "react";
import Body from "./components/Body";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const handelCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6  py-6">
      <div className="w-[40%] p-6 shadow-lg bg-[#293462] space-y-8 rounded-md">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">
            CELSIUS TO FAHRENHEIT CONVERTER
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-4 px-72 ">
        <div className="flex items-center space-x-5 justify-center">
          <label>
            <h1 className="text-xl font-semibold text-[#fafbf6]">Celsius:</h1>
            <input
              className="bg-slate-600 rounded-full px-3 h-8"
              type="number"
              value={celsius}
              onChange={handelCelsiusChange}
            />
          </label>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <label>
            <h1 className="text-xl font-semibold text-[#fafbf6]">Fahrenheit:</h1>
            <input
              className="bg-slate-600 rounded-full px-3 h-8"
              type="number"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
            />
          </label>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
