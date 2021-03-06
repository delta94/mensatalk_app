export interface RoomInterface {
  id: number;
  name: string;
}

export interface MessageInterface {
  id: number;
  textMessage: string;
  created_at: string;
}

export interface UserInterface {
  id: number;
  name: string;
}

export interface SignUpUserInterface {
  username: string;
  email: string;
  password: string;
}

export interface SignInUserInterface {
  username: string;
  password: string;
}
