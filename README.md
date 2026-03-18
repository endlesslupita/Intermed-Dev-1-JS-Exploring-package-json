# Intermed-Dev-1-JS-Exploring-package-json

## About This Project

This project explores the structure and functionality of `package.json` in a Node.js project. It demonstrates how to initialize a Node.js project, manage dependencies, define npm scripts, and apply semantic versioning.

The project includes a `factorial` function in `index.js` with a Jest test suite covering both normal and edge cases.

## How to Run

**Install dependencies:**
```bash
npm install
```

**Start the app:**
```bash
npm start
```

**Run tests:**
```bash
npm test
```

## Files

| File | Description |
|------|-------------|
| `index.js` | Main application entry point, contains the `factorial` function |
| `index.test.js` | Jest test suite (7 tests: 3 normal, 4 edge cases) |
| `package.json` | Project configuration and dependency manifest |
| `package-lock.json` | Exact dependency versions for reproducible installs |
| `report.md` | Written report explaining each section of `package.json` |

---

# Assignment: Exploring package.json in Node.js

**Objective:** Understand the structure and functionality of the `package.json` file in a Node.js project.

## Prerequisites

- Basic understanding of Node.js and npm (Node Package Manager)
- Node.js installed on the computer

---

## Tasks

### 1. Create a Basic Node.js Project

- Initialize a new Node.js project using `npm init`. This will create a basic `package.json` file.
- Fill in details like project name, version, description, entry point (e.g., `index.js`), test command, git repository, keywords, author, and license.

### 2. Understanding Dependencies

- Install a package (e.g., Express.js) using npm and observe how it gets added to `package.json` under `dependencies`.
- Explain the difference between `dependencies` and `devDependencies`.
- Manually add a development dependency (like a testing framework) into `package.json` and then run `npm install`.

### 3. Exploring Scripts

- Add custom scripts for starting the application and running tests in the `scripts` section.
- Run these scripts using npm commands and observe the output.

### 4. Versioning

- Discuss the importance of the `version` field in `package.json`.
- Explain semantic versioning and how it applies to dependencies.

### 5. The `engines` Field

- Add an `engines` field specifying the version of Node.js and npm required for the project.

### 6. Other Fields

- Explore additional fields such as `repository`, `keywords`, `author`, and `license`.
- Discuss how these fields can be useful for package distribution and maintenance.

### 7. Creating a `package-lock.json`

- Explain the purpose of `package-lock.json`.
- Discuss why it's important to include it in version control.

---

## Assignment Deliverables

- A fully completed `package.json` file with all sections properly filled out.
- A short report explaining each section of `package.json` and its purpose.

## Evaluation Criteria

- Correctness and completeness of the `package.json` file.
- Understanding of the key components of `package.json`, as demonstrated in the report.
- Ability to use npm to manage dependencies and scripts.

---

## Assignment Submission

Once you have completed the assignment, prepare the following for submission:

### GitHub Repository

- Push your project to a new **public** GitHub repository.
- Your repository should include all source code files and a `README.md` that briefly describes the project and how to run it.

### Demonstration

Provide a video demonstrating your project in action. The demonstration should include:

- The program's functionality
- At least **3 normal test cases** and at least **3 edge case test cases**, all passing

### Submission Links

- Link to your GitHub repository
- YouTube link (public or unlisted) to your video demonstration
