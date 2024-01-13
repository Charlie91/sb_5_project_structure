import { useState, useEffect } from 'react';

export const useFetch = <T>(apiCall: (...args: any[]) => Promise<Response>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const request = (...args: unknown[]) => {
      apiCall(...args)
      .then(response => {
        if (!response.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return response.json();
      })
      .then((data: T) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      })
  }

  return { data, isLoading, request, error };
}
