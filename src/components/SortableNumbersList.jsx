const SortableNumbersList = ({ numbers, sortDirection, onToggleSort }) => {
  return (
    <div className="sorted-numbers-container">
      <div className="sort-controls">
        <button onClick={onToggleSort} className="toggle-button">
          Toggle Sort ({sortDirection === "asc" ? "Descending" : "Ascending"})
        </button>
      </div>
      <h2>
        Sorted Numbers ({sortDirection === "asc" ? "Ascending" : "Descending"}):
      </h2>
      <ol className="numbers-list">
        {numbers.map((num, index) => (
          <li key={index} className="number-item">
            {num}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SortableNumbersList;
