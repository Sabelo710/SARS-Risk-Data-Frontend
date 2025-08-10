# SARS Risk Data - Frontend

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
