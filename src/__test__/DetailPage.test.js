import { CHECK_INVENTORY_DB } from '../Const_URL';
import { getInfo } from './util/localStoage.util';
import { MOCK_DATA } from './CONST_TEST';

//  Local Storage Check for  the data
describe('local stoarge Check', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.restoreAllMocks();
  });
  // Getting information from local storage
  it('should get user info from local storage', () => {
    const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
    window.localStorage.setItem(CHECK_INVENTORY_DB, JSON.stringify(MOCK_DATA));
    const actualValue = getInfo();
    expect(actualValue).toEqual(MOCK_DATA);
    expect(getItemSpy).toBeCalledWith(CHECK_INVENTORY_DB);
  });
  // Getting empty Object from local storage
  it('should get empty object if no data in local storage', () => {
    const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
    const actualValue = getInfo();
    expect(actualValue).toEqual({});
    expect(window.localStorage.getItem).toBeCalledWith(CHECK_INVENTORY_DB);
    expect(getItemSpy).toBeCalledWith(CHECK_INVENTORY_DB);
  });
});
