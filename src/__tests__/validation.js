import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
  const email = "dante@test.com";
  expect(validateEmail(email)).toBeTruthy();
});

it('fails on invalid email', () => {
  const email = "banan";
  expect(validateEmail(email)).toBeFalsy();
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
  const password = "123Test321";
  expect(validatePassword(password)).toBeTruthy();
});

it('invalid password: missing digit', () => {
  const password = "Testaren";
  expect(validatePassword(password)).toBeFalsy();
});

it('invalid password: missing 1 uppercase', () => {
  const password = "123testaren";
  expect(validatePassword(password)).toBeFalsy();
});
