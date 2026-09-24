# Ian Owira's Homepage

Welcome to my personal homepage and CV! This project is a fun, retro-inspired website designed to mimic the aesthetic of a classic 1998 webpage, complete with tables, `<marquee>` tags, and enthusiastic "junior developer" comments. 

Despite its nostalgic appearance, it's powered by a robust modern development stack under the hood.

## 🚀 Tech Stack

- **HTML5 & CSS3**: Styled to look like it belongs in the late 90s.
- **TypeScript**: Used for interactive logic (like the terminal typewriter effect).
- **Tailwind CSS v4**: For modern CSS processing and utilities.
- **Parcel**: Lightning-fast, zero-configuration bundler.
- **Vitest**: For fast and reliable unit testing.
- **PNPM**: Fast, disk space efficient package manager.

## 🛠 Workflow & Tooling

This project enforces strict git workflows and code quality standards:
- **Husky**: Manages Git hooks (`pre-commit`, `commit-msg`, `prepare-commit-msg`).
- **Commitizen & Commitlint**: Enforces standard Conventional Commits.
- **ESLint**: Lints JavaScript and TypeScript files.

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js installed. We use `pnpm` for package management.

### Installation

Clone the repository and install the dependencies:
```bash
# Install dependencies using pnpm
pnpm install
```

### Running the App

Start the development server with Parcel:
```bash
pnpm start
```
The app will be available at `http://localhost:1234`.

### Building for Production

To build the static files for production:
```bash
pnpm build
```
This will compile and minify all assets into the `dist/` directory.

## 🧪 Testing and Linting

Run unit tests with Vitest:
```bash
pnpm test
```

Run ESLint to check for code issues:
```bash
pnpm lint
```

## 📝 Committing Changes

This repository strictly uses **Conventional Commits**. Instead of running `git commit`, please use the Commitizen interactive prompt:

```bash
# Adds files to staging and starts the interactive commit wizard
git add .
pnpm commit
```

If you do run `git commit`, Husky is configured to intercept the command and run the Commitizen wizard automatically (unless you provide a commit message directly via the `-m` flag).

All commits must pass both the `vitest` suite and `eslint` checks before they are allowed to proceed.

## 📄 License

ISC License. Copyright (c) 1998 Ian Owira (Just kidding, it's modern).
