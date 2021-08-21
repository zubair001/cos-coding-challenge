export interface User {
  internalUserId: string;
  internalUserUUID: string;
  userId: string;
  token: string;
  type: string;
  authenticated: boolean;
}
