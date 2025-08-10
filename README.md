# SARS Risk Data - Frontend

## How To Run Application

Clone the project

```bash
git clone https://github.com/Sabelo710/SARS-Risk-Data-Frontend.git
```

Enter the **sars-risk-data** folder

```command
cd sars-risk-data
```

Install dependencies

```node.js
npm install
```

Run the application

```node.js
npm run dev
```

After that you will see the following on your cli

Open **http://localhost:5173** on your browser:  
<br/>Enter comma-separated numbers e.g **25,0,0.5,1,100** and click "**Sort Numbers**"  
<br/>Click "**Toggle Sort (Ascending/Descending)**" to sort the number list in ascending or descending order  
<br/>Errors also show clearly

## Key Design Descisions

- Use the **vite** build tool:
  - Instant startup and lightning-fast Hot Module Replacement
  - **No Webpack config. No Babel setup. Just code**.
  - <span style="color: #f1c40f;">**Speeds up UI tweaking**</span>
- Use **react-hook-form**:
  - <span style="color: #f1c40f;">**Minimal re-renders - only fields that change are re-rendered, leading to significant performance gains**</span>
  - Schema-based validation (via Yup or Zod) for future multi-step wizards
  - Conditional validations
- Custom **useNumberSorter:**
  - No unnecessary re-computations since sorting only happens during render phase
  - <span style="color: #f1c40f;">**Single responsibility principle - the hook only handles number sorting**</span>
  - <span style="color: #f1c40f;">**Easy to test in isolation**</span>
  - **<span style="color: #f1c40f;">Can be easily extended</span>** <span style="color: #f1c40f;">**(e.g., adding custom comparator functions) without affecting consuming components**</span>
- Grouping css with component:
  - Keeps code modular
  - Makes it easy reuse in future

&nbsp;

## A text-based breakdown of how I would unit test this application:

1.  Test the custom hook (`useNumberSorter.js`):

    - Verify that the initial state is correct (sortDirection is "asc", sortedNumbers is empty).
    - Test that `sortNumbers` correctly parses and stores numbers from a string.
    - Test that `toggleSortDirection` switches between "asc" and "desc".
    - Ensure that numbers are sorted correctly in both ascending and descending order.

2.  Test the form component (`NumberInputForm.jsx`):

    - Check that the form renders correctly.
    - Validate that entering valid numbers enables form submission.
    - Validate that entering invalid input (e.g., letters) shows an error.
    - Ensure the `onSubmit` callback is called with the correct data.

3.  Test the list component (`SortableNumbersList.jsx`):

    - Ensure the list displays the numbers in the correct order.
    - Test that clicking the toggle button calls the `onToggleSort` handler.
    - Check that the sort direction label updates appropriately.

4.  Test the page component (`NumberSorter.jsx`):

    - Ensure the form and list render as expected.
    - Test the integration: submitting the form updates the list, and toggling sort updates the order.

5.  Test the main app (`App.jsx`):

    - Ensure the `NumberSorter` page is rendered.

I would use a testing library like React Testing Library and Jest to simulate user interactions and assert expected outcomes. Mock hooks or props as needed to isolate component behavior.
