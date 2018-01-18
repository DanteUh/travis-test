import * as localStorageUtils from '../utils/localStorage';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should get the user from localStorage', () => {
  const email = "dante@test.com";
  localStorageUtils.saveUserToLocalStorage(email);
  expect(localStorageUtils.getUserFromLocalStorage()).toBe(email);
});

it('should get empty user from localStorage', () => {
  const email = "dante@test.com";
  localStorageUtils.saveUserToLocalStorage(email);
  localStorageUtils.removeUserFromLocalStorage();
  expect(localStorageUtils.getUserFromLocalStorage()).toBeFalsy();
});

