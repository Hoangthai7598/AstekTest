export interface ILoginProps {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface ILoginResponse {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}
