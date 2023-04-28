import { AuthStorageService } from '../services/authStorage.service';

const authStorageService = new AuthStorageService();
export class Auth {
  valueToken = 'test';
  constructor() {}
  login() {
    authStorageService.setToken(this.valueToken);
  }
  logout() {
    authStorageService.removeToken();
  }
  isLogged() {
    authStorageService.getToken();
  }
}
