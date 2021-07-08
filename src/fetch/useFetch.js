import { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
// One hook for the entire applicattion and  returns data  baseed  on  get  request
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue); //   hooks for  data
  const [loading, setLoading] = useState(true); //   hooks for  loading
  useEffect(() => {
    const fetchData = async function() {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
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
