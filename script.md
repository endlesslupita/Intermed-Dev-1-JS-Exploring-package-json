Intermed Dev 1: Exploring package.json

"In this video I'll walk through my Node.js project exploring the structure and functionality of package.json."

Open package.json in the editor.

"This is the package.json file. It was generated with npm init and contains fields for the project name, version, description, author, and license. The scripts section defines two commands: npm start to run the app, and npm test to run the test suite. The dependencies section shows Express.js, which is a production dependency, and devDependencies shows Jest, which is only needed for testing. The engines field specifies the required versions of Node.js and npm."

Open index.js.

"The main file contains a factorial function. It throws an error for negative numbers and decimals, returns 1 for zero and one by definition, and recursively calculates the factorial for all other valid inputs."

Open the terminal and run npm test.

"Now I'll run the test suite."

Wait for results to appear.

"All 7 tests pass. The three normal cases test factorial of 3, 4, and 5. The four edge cases test that factorial of 0 and 1 return 1, and that negative numbers and decimals throw an error."

Run npm start.

"And npm start runs the entry point with no errors."

"The full report explaining each section of package.json is in report.md in the repository. Thank you."