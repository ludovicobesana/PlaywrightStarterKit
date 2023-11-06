# Development Guidelines for Playwright Automation Tests

## General Guidelines

- Use TypeScript for scripting and avoid using `any` type.
- Adhere to the [Prettier](https://prettier.io/) config. CI will lint automatically.
- Utilize [ESLint](https://eslint.org/) for additional linting. CI will also handle this.
- Aim to make the tests as performant as possible; **every millisecond counts in CI/CD**.
- Use function declarations instead of arrow functions for better readability and debugging.

## Scripting and Structure

### Import / Export

- Always use named exports; avoid `export default`.
- Avoid use [relative paths](https://www.codingrooms.com/blog/file-paths) in imports. Use absolute paths instead.

### Directory and File Naming

- Maintain a clear directory structure that reflects the app's functionalities.
- Test files should be suffixed with `.test.ts` or `.spec.ts`.

### Code Reusability

- Put reusable helper functions and utilities in a `utils` directory.

## Locators and Page Objects

- Prefer using data attributes for locators.
- Stick to the [Page Object Model](https://playwright.dev/docs/pom) (POM). All page objects should reside in a `pages` directory.

## Mocking and Data

- Limit external dependencies. The fewer there are, the better the performance.
- Use [mock services](https://playwright.dev/docs/mock) for tests that don't need actual backend calls.

## Asynchronous Operations

- Leverage Playwright's [auto-waiting](https://playwright.dev/docs/actionability) and avoid manual waits or sleeps.

## Props and Types

- Prefer using interfaces over types for defining props.
- Use `NonNullable<Type>` where applicable.

## Tests and Assertions

- Utilize Playwright's [built-in assertions](https://playwright.dev/docs/test-assertions); throw meaningful errors for easy debugging.
- Separate tests into "flow" and "atomic" categories.
- For "flow" tests, ensure they cover a complete user journey.
- "Atomic" tests should cover isolated functionalities.

## CI/CD Integration

- Integrate with a CI/CD pipeline that lints, runs tests, and provides test reports.

## Version Control

- Avoid using `git rebase` to prevent potential conflicts and history alterations. Stick to merge commits (`git merge`) for a more transparent and manageable history.
- Use [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
- Name branches with prefixes like `feature/`, `fix/`, or `chore/`.
- Follow semantic commit messages.

```markdown
fix(tests): resolve flakiness in login test
feat(report): add screenshot on failure
chore(deps): update Playwright to latest version
```

### Code Reviews

- Request reviews from team members once your PR is created. Aim to get at least one approval from a maintainer or experienced contributor.
- Address any comments or requested changes promptly to expedite the merging process.

## Closing Thoughts

Feel free to suggest changes or improvements.

The guidelines are designed to keep your automation suite efficient, maintainable, and scalable.

Let us know if you want to add or change anything.

> QA Team
