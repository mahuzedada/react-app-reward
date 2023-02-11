# Implementation notes

- Testing
  - no test was written for the resource folder since it simulates the API
  - server.js is mocked in the controller files but in the real world, that would be the place to mock axios or similar libraries
- Styling: I used tailwindCss for styling. TailwindCss is a highly customizable css library packed with classes like flex, text-center and rotate-90 that can be composed to build any design, directly in the markup.
- Data
  - There are json files under the resource folder that contains a few transactions
  - The fake api is configured to return transactions that are 90 days or less from today's date
