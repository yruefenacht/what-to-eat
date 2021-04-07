export interface IAuthService {
  doLogin(email: string, password: string): Promise<void>;
  doLogout(): Promise<boolean>;
}
