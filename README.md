# Challenge #1. Number conversion

### Description

Write a program that would take a number and return its English representation. Example:

- *Input*: `42`
- *Output*: `'forty two'`

For implementation use the `convertNumberToEnglishText(n: number): string` function located in `src/index.ts`.
 
### Project setup

You need to have `node` and `npm` installed on your machine.

1. Run `npm i` to install dependencies.
1. Run `npm t` to run tests.

### Requirements checklist

1. All test cases that are currently in `src/index.test.ts` must pass.
1. Skip the word "and" for larger numbers, i.e. `two thousand one` instead of `two thousand and one`.
1. The implementation must cover cases from `-99999` to `99999`.
1. Modules converting number to word are not permitted.

