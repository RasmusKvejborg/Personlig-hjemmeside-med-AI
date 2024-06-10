import { useState } from "react";

export default function Settings() {
  const [pointsPercentage, setPointsPercentage] = useState(10);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Indstillinger</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pointsPercentage"
          >
            Procentdel af køb som optjenes i point
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pointsPercentage"
            type="number"
            placeholder="Indtast procentdel"
            value={pointsPercentage}
            onChange={(e) => setPointsPercentage(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Gem
          </button>
        </div>
      </div>
    </div>
  );
}
