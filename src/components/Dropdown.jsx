import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSize } from "../redux/slices/fontSlice";

const Dropdown = () => {
  const options = [
    { label: "xs", value: "xs" },
    { label: "sm", value: "sm" },
    { label: "base", value: "base" },
    { label: "xl", value: "xl" },
    { label: "2xl", value: "2xl" },
  ];
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("base");
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="text-white bg-[#004051] hover:bg-[#135162] font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}
        type="button"
      >
        Font Size{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isOpen ? "" : "hidden"
        } absolute right-2 top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => {
                  setSelected(option.value);
                  // setIsOpen(false);
                  dispatch(changeSize(option.value));
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
