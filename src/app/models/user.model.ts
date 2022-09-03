export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
}


export interface CreateUserDTO extends Omit<User, 'id'> { }
