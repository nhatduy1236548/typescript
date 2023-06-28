/**
 *Error: khi ở runtime type không quan tâm đến type dạng interface chỉ quan tâm chương trình chạy nên không được comment nó sẽ làm comment là property thứ 4.
 */
interface User {
    id: number;
    firstName: string;
    lastName: string;
    /**
     * How do we ensure that role is only one of:
     * - 'admin'
     * - 'user'
     * - 'super-admin'
     */
    role: string;
  }
  
  export const defaultUser: User = {
    id: 1,
    firstName: 'Matt',
    lastName: 'Pocock',
    role: 'I_SHOULD_NOT_BE_ALLOWED',
  };
  