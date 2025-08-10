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
<img width="852" height="287" alt="6-running-cli" src="https://github.com/user-attachments/assets/7f46d8d2-71d3-48f9-a171-728845dae5f3" />


Open **http://localhost:5173** on your browser:
<img width="1918" height="971" alt="1-open-app" src="https://github.com/user-attachments/assets/82571d19-43c6-47e9-aded-f7e93b34f640" />

<br/>Enter comma-separated numbers e.g **25,0,0.5,1,100** and click "**Sort Numbers**"  
<img width="1740" height="901" alt="2-enter-values-and-click" src="https://github.com/user-attachments/assets/58f3376a-7ffa-47e0-a466-749648337974" />

<br/>Click "**Toggle Sort (Ascending/Descending)**" to sort the number list in ascending or descending order  
<img width="1461" height="858" alt="3-toggle-button" src="https://github.com/user-attachments/assets/aa4eea38-6306-4dd3-b8b1-ee1ee51e43c2" />

<br/>Errors also show clearly
<img width="1676" height="895" alt="4-error1" src="https://github.com/user-attachments/assets/5c34a7b9-421e-4724-b1ec-619d033402f1" />
<img width="1362" height="918" alt="5-error2" src="https://github.com/user-attachments/assets/e563f407-61de-4539-9ee9-6574e9385333" />


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
