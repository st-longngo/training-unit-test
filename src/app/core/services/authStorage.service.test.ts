import { AuthStorageService } from './authStorage.service';
const authStorageService = new AuthStorageService();
const valueToken = 'test';

describe('Test AuthStorageService', () => {
  describe('Test setToken method', () => {
    const spySetItem = jest.spyOn(Storage.prototype, 'setItem');
    authStorageService.setToken(valueToken);
    test('setToken is called', () => {
      expect(spySetItem).toHaveBeenCalled();
      expect(spySetItem).toHaveBeenCalledTimes(1);
      expect(spySetItem).toBeCalledWith(authStorageService.ACCESS_TOKEN, valueToken);
    });
  });
  describe('Test getToken method', () => {
    const spyGetItem = jest.spyOn(Storage.prototype, 'getItem');
    authStorageService.getToken();
    test('getToken is called', () => {
      expect(spyGetItem).toHaveBeenCalled();
      expect(spyGetItem).toHaveBeenCalledTimes(1);
      expect(spyGetItem).toBeCalledWith('token');
    });
  });
  describe('Test getToken method', () => {
    const spyRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');
    authStorageService.removeToken();
    test('removeToken is called', () => {
      expect(spyRemoveItem).toHaveBeenCalled();
      expect(spyRemoveItem).toHaveBeenCalledTimes(1);
      expect(spyRemoveItem).toBeCalledWith(authStorageService.ACCESS_TOKEN);
    });
  });
});
