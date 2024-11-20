import React from "react";

const ExpenseChart = () => {
  const data = [
    { category: "Food and Drinks", value: 672400, maxValue: 1378200 },
    { category: "Shopping", value: 1378200, maxValue: 1378200 },
    { category: "Housing", value: 928500, maxValue: 1378200 },
    { category: "Transportation", value: 420700, maxValue: 1378200 },
    { category: "Vehicle", value: 520000, maxValue: 1378200 },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white px-[50px] shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Where your money go?</h2>
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.value / item.maxValue) * 100;
          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-medium">{item.category}</span>
                <span className="text-gray-500">{item.value.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseChart;
