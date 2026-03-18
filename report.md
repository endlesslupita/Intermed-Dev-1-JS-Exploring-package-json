# Report: Exploring package.json in Node.js

## Introduction

This report explains the purpose of each section in the `package.json` file created for this assignment. The `package.json` file is the central configuration file for any Node.js project. It describes the project, manages dependencies, and defines scripts that automate common tasks.

---

## Fields

### `name`
The name of the project as it would appear in the npm registry if published. It must be lowercase and cannot contain spaces.

### `version`
The current version of the project, following semantic versioning (see the Versioning section below). This project starts at `1.0.0`.

### `description`
A brief human-readable summary of what the project does. This is useful when browsing npm or sharing the project with others.

### `keywords`
An array of terms that describe the project. Keywords help other developers find the package if it is published to npm. For this project: `testing`, `packages`, and `education`.

### `homepage`
A URL pointing to the project's homepage, in this case the GitHub repository README.

### `bugs`
The URL where issues with the project can be reported. npm populates this automatically from the repository URL.

### `repository`
Specifies where the source code is hosted, including the type of version control (`git`) and the URL. This makes it easy for users to find and contribute to the source code.

### `license`
The terms under which others may use the project. This project uses the MIT license, which is permissive and commonly used in open source projects.

### `author`
The name of the person or organization responsible for the project.

### `type`
Specifies the module system used by the project. A value of `commonjs` means the project uses `require()` and `module.exports`, which is the traditional Node.js module system. The alternative is `module`, which uses the modern `import`/`export` syntax.

### `main`
The entry point of the application. When someone runs the project or requires it as a package, Node.js looks for this file first. In this project it is `index.js`.

### `scripts`
A collection of named commands that can be run with `npm run <name>`. Two scripts are defined here:

- `start` runs `node index.js` and can be invoked with `npm start`
- `test` runs `jest` and can be invoked with `npm test`

Using scripts means that anyone working on the project can run standard commands without needing to know the specific tools or flags being used.

### `dependencies`
Packages required for the application to run in production. This project includes Express.js, a popular web framework for Node.js. These packages are installed with `npm install <package-name>`.

### `devDependencies`
Packages needed only during development and testing, not in production. This project includes Jest, a JavaScript testing framework. These packages are installed with `npm install --save-dev <package-name>`.

The distinction between `dependencies` and `devDependencies` matters because production deployments can skip installing dev dependencies, keeping the deployed environment leaner and more secure.

### `engines`
Specifies the versions of Node.js and npm required to run the project. This helps prevent compatibility issues when others install or deploy the project. This project requires Node.js 25.3.0 or higher and npm 11.6.2 or higher.

---

## Versioning

Version numbers in `package.json` follow **semantic versioning**, written as `MAJOR.MINOR.PATCH`. For example, Express is listed as `^5.2.1`.

The three parts mean:

- **MAJOR** signals breaking changes. Upgrading across a major version requires reviewing and testing any code that integrates with the package, as behavior may have changed in incompatible ways.
- **MINOR** signals new features that are backwards-compatible. In theory, upgrading to a new minor version should not require changes to existing code, though this depends on how standard the usage is. Developers cannot always predict every way that users depend on their package.
- **PATCH** signals bug fixes. These updates are the least likely to introduce problems and may actually improve compatibility by resolving known issues or security vulnerabilities.

The `^` symbol before a version number tells npm to accept newer minor and patch versions automatically, but to hold the major version fixed. This balances staying up to date with protecting against breaking changes.

I first encountered the formal concept of semantic versioning at a Python conference, where a speaker was actively promoting its adoption among open source projects. Before that, I had an intuitive sense of what the three numbers represented, but I had not understood the explicit distinction between breaking and non-breaking changes.

---

## `package-lock.json`

While `package.json` lists dependencies with flexible version ranges (using `^`), `package-lock.json` records the exact versions that were actually installed, along with the full dependency tree and checksums for each package. This ensures that anyone who clones the repository and runs `npm install` gets precisely the same packages, not just compatible ones. For this reason, `package-lock.json` should always be committed to version control.

---

## Testing

This project includes a `factorial` function in `index.js` and a test suite in `index.test.js` using Jest. The function computes the factorial of a non-negative integer and throws an error for invalid inputs.

**Normal test cases:**

| Input | Expected Output |
|-------|----------------|
| 3     | 6              |
| 4     | 24             |
| 5     | 120            |

**Edge cases:**

| Input | Expected Output                               |
|-------|-----------------------------------------------|
| 0     | 1 (by mathematical definition)                |
| 1     | 1 (by mathematical definition)                |
| -3    | throws "Input must be a non-negative integer" |
| 2.5   | throws "Input must be a non-negative integer" |

All 7 tests pass.
