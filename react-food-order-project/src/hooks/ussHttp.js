import { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(fetchFn) {
  const response = await fetchFn();

  if (!response.ok) {
    throw new Error(response.message || "Something went wrong, failed to send request.");
  }

  const resData = await response.json();
  return resData;
}

export default function useHttp(httpFn, initialData) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  const sendRequest = useCallback(async function sendRequest() {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(httpFn);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [httpFn]);

  useEffect(() => {
      sendRequest();
  }, [sendRequest, httpFn]);

  return {
    data, isLoading, error, sendRequest
  };
}