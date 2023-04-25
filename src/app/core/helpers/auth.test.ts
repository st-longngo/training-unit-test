import { AuthStorageService } from '../services/authStorage.service';
import { Auth } from './auth'; 
const authStorageService = new AuthStorageService();
const auth = new Auth();
const valueToken = 'test';

describe('Test Auth Class', () => {
  describe('Test login method', () => {
    const spySetItem = jest.spyOn(AuthStorageService.prototype, 'setToken');
    auth.login();
    test('Login is called', () => {
      expect(spySetItem).toHaveBeenCalled();
      expect(spySetItem).toHaveBeenCalledTimes(1);
      expect(spySetItem).toBeCalledWith(authStorageService.ACCESS_TOKEN, valueToken);
    });
  });
  describe('Test isLogged method', () => {
    const spyGetItem = jest.spyOn(AuthStorageService.prototype, 'getToken');
    auth.isLogged();
    test('IsLogged is called', () => {
      expect(spyGetItem).toHaveBeenCalled();
      expect(spyGetItem).toHaveBeenCalledTimes(1);
      expect(spyGetItem).toBeCalledWith('token');
    });
  });
  describe('Test getToken method', () => {
    const spyRemoveItem = jest.spyOn(AuthStorageService.prototype, 'removeToken');
    auth.logout();
    test('removeToken is called', () => {
      expect(spyRemoveItem).toHaveBeenCalled();
      expect(spyRemoveItem).toHaveBeenCalledTimes(1);
      expect(spyRemoveItem).toBeCalledWith(authStorageService.ACCESS_TOKEN);
    });
  });
});
