import { useState } from "react";

const useNumberSorter = () => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortedNumbers, setSortedNumbers] = useState([]);

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortNumbers = (numbersString) => {
    const numbersArray = numbersString
      .split(",")
      .map((num) => parseFloat(num.trim()));
    setSortedNumbers(numbersArray);
  };

  const sortedNumbersDisplay = [...sortedNumbers].sort((a, b) =>
    sortDirection === "asc" ? a - b : b - a
  );

  return {
    sortDirection,
    sortedNumbers: sortedNumbersDisplay,
    toggleSortDirection,
    sortNumbers,
  };
};

export default useNumberSorter;
