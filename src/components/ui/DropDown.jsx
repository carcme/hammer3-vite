import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select
      className="appearance-none focus:shadow-outline flex w-full px-4 py-4 leading-tight transition-[height] duration-500 ease-out border border-gray-300 rounded-md shadow max-w-96 bg-neutral-700 hover:border-gray-500 focus:outline-none focus:shadow-outline min-w-32"
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">Select Number of Players</option>
      {options.map((option, index) => (
        <option className="bg-green-500" key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
