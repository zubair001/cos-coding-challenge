export interface User {
  name: string;
  email: string;
  token: string;
  refreshToken: string;
  type: string;
  authenticated: boolean;
}
