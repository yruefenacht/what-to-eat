import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

export interface IAuthService {
  user$: Observable<User | null>;
  doLogin(email: string, password: string): Promise<void>;
  doLogout(): Promise<boolean>;
}
