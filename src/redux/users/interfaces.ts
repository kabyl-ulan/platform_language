export interface IUsers {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export interface IUsersState {
  isLoading: boolean;
  users: IUsers[];
  error: string | any;
}
