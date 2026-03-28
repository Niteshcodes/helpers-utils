# Contributing to universal-helper-functions

Thank you for your interest in contributing to universal-helper-functions! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting bugs

- Before submitting a bug report, check the issue page to see if the problem has already been reported
- If you find a closed issue that seems related to what you're experiencing, open a new issue and include a link to the original issue
- Provide a clear description, as much relevant information as possible, and a code sample or executable test case demonstrating the problem

### Suggesting enhancements

- Clearly describe the enhancement and the current behavior vs. expected behavior
- Provide example code showing how the feature would be used
- List some examples of other libraries or applications that use this feature, if applicable

### Pull requests

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add or update tests as needed
5. Update the README.md if needed
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Development Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/universal-helper-functions
cd universal-helper-functions

# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Watch mode
npm run dev
```

## Code Style

- Use TypeScript for type safety
- Follow the existing code style
- Use meaningful variable names
- Add JSDoc comments for public functions
- Format code with `npm run format`
- Lint code with `npm run lint`

## Testing

- Write tests for new features
- Update tests when modifying existing functionality
- Run `npm test` to verify all tests pass
- Run `npm run test:coverage` to check code coverage

## Documentation

- Update the README.md if adding or modifying features
- Include examples for new utilities
- Add TypeScript type definitions
- Document breaking changes

## Commit Messages

Use clear and descriptive commit messages:
- Use the imperative mood ("add feature" not "added feature")
- Limit the first line to 72 characters
- Reference issues and pull requests liberally after the first line

Example:
```
Add new array utility: chunk function

- Splits array into chunks of specified size
- Includes comprehensive tests
- Updates documentation

Closes #123
```

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Ensure all tests pass: `npm test`
3. Ensure code quality: `npm run lint`
4. Get review from maintainers
5. Squash commits if requested
6. Merge when ready

## Licensing

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue with the "question" label or reach out to the maintainers:

**Maintainer:** Nitesh Upadhayay
- Email: upadhayaynitesh94@gmail.com
- GitHub: [@NiteshCodes](https://github.com/NiteshCodes)

Thank you for contributing! 🎉
