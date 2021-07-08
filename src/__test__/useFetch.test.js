import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetch from '../fetch/useFetch';
import { INVENTORY_URL } from '../Const_URL';
const initialValue = [];
describe('fetchData', () => {
  test('useFetch performs GET request', async () => {
    const mock = new MockAdapter(axios);
    const mockData = 'response';
    mock.onGet(INVENTORY_URL).reply(200, mockData);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(INVENTORY_URL, initialValue)
    );
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual('response');
    expect(result.current.loading).toBeFalsy();
  });
});
