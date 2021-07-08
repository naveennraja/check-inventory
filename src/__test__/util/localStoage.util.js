import { CHECK_INVENTORY_DB } from '../../Const_URL';
// Mocking Local Storage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

export function getInfo() {
  const localStorageInfo = window.localStorage.getItem(CHECK_INVENTORY_DB);
  if (localStorageInfo) {
    return JSON.parse(localStorageInfo);
  }
  return {};
}
