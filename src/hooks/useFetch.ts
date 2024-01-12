import { useState, useEffect } from 'react';

export const useFetch = (url: string, method: 'GET' | 'POST' = 'GET') => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url, { method })
      .then(response => {
        if (!response.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  }, [url])

  return { data, isLoading, error };
}
