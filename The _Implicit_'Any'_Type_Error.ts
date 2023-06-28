import { expect, it } from "vitest";
/**
 * Error: không nên dùng type any vì type có thể convert dữ liệu không đúng.
 */
export const addTwoNumbers = (a: number, b:number) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 1)).toEqual(3);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});