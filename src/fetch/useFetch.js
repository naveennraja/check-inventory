import { useState, useEffect } from 'react';
import axios from 'axios';
import { CHECK_INVENTORY_DB } from '../Const_URL';
// custom hook for performing GET request
// One hook for the entire applicattion and  returns data  baseed  on  get  request
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue); //   hooks for  data
  const [loading, setLoading] = useState(true); //   hooks for  loading
  useEffect(() => {
    const fetchData = async function() {
      var config = {
        method: 'GET',

        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        // withCredentials: true,
        credentials: 'all-origin'
      };
      try {
        setLoading(true);
        const response = await axios.get(url, config);
        if (response.status === 200) {
          window.localStorage.setItem(
            CHECK_INVENTORY_DB,
            JSON.stringify(response.data)
          );
          setData(response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export default useFetch;
