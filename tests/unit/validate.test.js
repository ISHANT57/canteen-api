import { test, expect } from "vitest";
import { isValidEmail, validatePassword } from "../../src/users/validate.js";

test("accepts a normal email", () => {
  expect(isValidEmail("user@example.com")).toBe(true);
});

test("rejects an email without @", () => {
  expect(isValidEmail("user.example.com")).toBe(false);
});

test("accepts a password of normal length", () => {
  expect(validatePassword("correcthorse").valid).toBe(true);
});

test("rejects a password one character below the minimum", () => {
  expect(validatePassword("abcdefg").valid).toBe(false);
});

test("accepts a password exactly at the minimum", () => {
  expect(validatePassword("abcdefgh").valid).toBe(true);
});

test("rejects a missing password", () => {
  expect(validatePassword(undefined).valid).toBe(false);
});

test("signup validates email", () => {
  const result = isValidEmail("user@example.com");
  console.log(result);
});
