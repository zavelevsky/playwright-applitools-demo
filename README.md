# Playwright Applitools Demo

This repository demonstrates how to use Playwright for automated testing, including visual testing with and without Applitools Eyes.

## Project Structure

- `src/`: React application source code
- `tests/`: Test files
  - `playwright/`: Playwright tests
  - `applitools/`: Applitools Eyes integration tests
- `.github/workflows/`: GitHub Actions workflow files

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

## Running Tests

### Playwright Tests

To run Playwright tests:

```
npm run test:playwright
```

### Updating Visual Snapshots

To update Playwright's visual snapshots:

```
npm run update-snapshots
```

To commit updated snapshots:

```
npm run commit-snapshots
```

### Applitools Eyes Tests

To run tests with Applitools Eyes:

```
npm run test:applitools
```

Note: You need to set the `APPLITOOLS_API_KEY` environment variable with your Applitools API key.

## CI/CD

This project uses GitHub Actions for continuous integration. Two workflows are defined:

1. `playwright-tests.yml`: Runs Playwright tests on push and pull requests.
2. `playwright-applitools-tests.yml`: Runs Playwright tests with Applitools Eyes on push and pull requests.

Both workflows ignore commits with the `[skip-tests]` keyword in the commit message.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.