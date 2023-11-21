# Playwright Starter Kit 🎭

## Overview

Playwright Starter Kit is a comprehensive boilerplate repository designed to assist developers in initiating automated testing projects using Playwright. This kit includes pre-configured settings and sample tests, demonstrating effective practices for web testing with [Playwright](https://playwright.dev/).

## Features

- Pre-configured Playwright environment
- Example tests showcasing Playwright's capabilities
- Customizable scripts for diverse testing scenarios

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/en/) installed.

Clone the repository:

```bash
git clone https://github.com/your-username/PlaywrightStarterKit.git
cd PlaywrightStarterKit
```

Install dependencies:

```bash
yarn  # or npm install
```

Install Browser Drivers:

```bash
yarn playwright install  # or npm run playwright install
```

## Usage

The repository includes several npm scripts for different testing scenarios:

- `npm run test`: Run all tests
- `npm run test:chrome`: Run tests in Chrome
- `npm run test:debug`: Run tests in debug mode
- `npm run test:headed`: Run tests in headed mode
- `npm run test:headed:debug`: Debug tests in headed mode
- `npm run desktop`: Run desktop-specific tests
- `npm run mobile`: Run mobile-specific tests
- `npm run desktop:atomic`: Run atomic tests for desktop
- `npm run mobile:atomic`: Run atomic tests for mobile
- `npm run desktop:flow`: Run flow tests for desktop
- `npm run mobile:flow`: Run flow tests for mobile
- `npm run prepare`: Install Husky for Git hooks
- `npm run ui`: Launch Playwright test UI
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Auto-fix ESLint issues
- `npm run prettier`: Check code format
- `npm run prettier:fix`: Auto-format code

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
