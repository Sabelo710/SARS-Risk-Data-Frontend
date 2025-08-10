import useNumberSorter from "../../hooks/useNumberSorter";
import NumberInputForm from "../../components/numberInputForm/NumberInputForm";
import SortableNumbersList from "../../components/SortableNumbersList";

import "./css/numberSorter.css";

const NumberSorter = () => {
  const { sortDirection, sortedNumbers, toggleSortDirection, sortNumbers } =
    useNumberSorter();

  const onSubmit = (data) => {
    sortNumbers(data.numbers);
  };

  return (
    <div className="number-sorter">
      {sortedNumbers.length > 0 && (
        <SortableNumbersList
          numbers={sortedNumbers}
          sortDirection={sortDirection}
          onToggleSort={toggleSortDirection}
        />
      )}

      <h1>Number Sorter</h1>
      <NumberInputForm onSubmit={onSubmit} />
    </div>
  );
};

export default NumberSorter;
