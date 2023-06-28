/**
 * Error với một biến không đúng cấu trúc typescript không thể hiểu được cần khai báo kiểu cho nó.
 */
import { expect, it } from 'vitest';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = { id: 1 } as User;

const getUserId = (user: User) => {
  return user.id;
};

it('Should get the user id', () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
