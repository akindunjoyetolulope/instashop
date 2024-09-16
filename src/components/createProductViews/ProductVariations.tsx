"use client";

import React, { useState } from "react";
import Button from "../Button";

interface Option {
  id: number;
  label: string;
  values: string[];
}

const ProductVariations = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, label: "Color", values: ["Red", "White", "Black"] },
  ]);

  const handleValueChange = (optionId: number, newValue: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, values: [...option.values, newValue] }
          : option
      )
    );
  };

  const handleRemoveValue = (optionId: number, value: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, values: option.values.filter((val) => val !== value) }
          : option
      )
    );
  };

  const handleAddOption = () => {
    const newOption: Option = {
      id: options.length + 1,
      label: "Size",
      values: [],
    };
    setOptions([...options, newOption]);
  };

  return (
    <div className="mt-[16px] space-y-4 max-w-md">
      {/* Option Cards */}
      {options.map((option) => (
        <div key={option.id} className="p-4 border rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-900 font-medium">Option {option.id}</h3>
            {/* Option menu placeholder */}
            <div className="text-gray-500 cursor-pointer">•••</div>
          </div>
          <h4 className="text-gray-700">{option.label}</h4>

          {/* Values */}
          <div className="flex flex-wrap gap-2">
            {option.values.map((value, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center space-x-2"
              >
                {value}
                <button
                  onClick={() => handleRemoveValue(option.id, value)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          {/* Input field to add new values */}
          <input
            type="text"
            placeholder="Enter values"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                handleValueChange(option.id, e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
            className="mt-2 px-3 py-1 focus:outline-none w-full"
          />
        </div>
      ))}

      <Button
        text="+ Add new option"
        variant="secondary"
        onClick={handleAddOption}
      />
    </div>
  );
};

export default ProductVariations;
