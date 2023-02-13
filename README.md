# Live preview

You can see a live preview of the app on https://rewards.mycodedemo.com/

# Implementation notes

- Testing
  - the file `resource/server.js` is mocked in all controller test files. In the real world, `axios` or similar libraries would be mocked instead.
- Styling: I used [tailwindCss](https://tailwindcss.com/) for styling. [TailwindCss](https://tailwindcss.com/) is a highly customizable css library packed with classes like `flex` and `text-center` that can be composed to build any design, directly in the markup.
- Code formatting: I used eslint and prettier to make the code consistent and readable.
- Data
  - There are json files under the `resource` folder that contains a list transactions and customers.
  - There are a couple of ways to interpret `a three-month period`. For this implementation I assumed that `a three-month period` means `90 days`.
  - The fake api is configured to return transactions that are 90 days or less from today's date.
  - The fake api also sorts the transactions by date.

# Javascript bug?

javascript has this thing where it adds extra digits to decimal additions. For example one would expect (80.23 - 50) to equal 30.23 but in reality it equals 30.230000000000004.
I used the `toFixed` method to get around that.

# How to run the code

From the root folder of the project, run the following commands:

- `npm i`
- `npm start`
  The code will be served on port `3000`.
  Navigate to `http://localhost:3000/` in your browser.

# How to use the app

- The homepage of the app will show a list of customers.
- Click on one of these customers to see a list of transactions related to the customer along with a breakdown of the rewards earned per month as well as the total reward.
- From the customer transaction page, you can click on the `View all transaction` link to see all transactions

> Note: Transaction will show for the previous 90 days
