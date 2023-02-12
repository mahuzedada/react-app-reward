# Implementation notes

- Testing
  - no test was written for the `resource` folder since it simulates the API
  - server.js is mocked in the controller files but in the real world, that would be the place to mock `axios` or similar libraries
  - all code under the `src` folder, besides the `resource` folder is 100% covered
- Styling: I used tailwindCss for styling. TailwindCss is a highly customizable css library packed with classes like flex, text-center and rotate-90 that can be composed to build any design, directly in the markup.
- Data
  - There are json files under the resource folder that contains a few transactions
  - The fake api is configured to return transactions that are 90 days or less from today's date

# Javascript bug?

javascript has this thing where it adds extra digits to decimal additions. For example one would expect (80.23 - 50) to equal 30.23 but in reality it equals 30.230000000000004.
I used the `toFixed` method to get around that.

# How to run the code

From the root folder of the project, run the following commands

- `npm i`
- `npm start`
  The code will be served on port `3000`.
  Navigate to `http://localhost:3000/` in your browser.

# How to use the add

- The homepage of the app will show a list of customers
- Click on one of these customers to see a list of transactions related to the customer along with the total reward
- From the customer transaction page, you can click on the `View all transaction` link to see all transactions

> Note: Transaction will show for the previous 90 days
