import { useCallback, useEffect, useState } from "react";
import type { UseApiCall } from "../models";

type UseApiOptions = {
  autoFetch?: boolean;
};
type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiResult<T> {
  loading: boolean;
  data: Data<T>;
  error: CustomError;
  fetch: () => void;
}

export const useApi = <T,>(
  apiCall: UseApiCall<T>,
  options?: UseApiOptions
): UseApiResult<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data<T>>(null);
  const [error, setError] = useState<CustomError>(null);

  const fetch = useCallback(() => {
    const { call, controller } = apiCall;
    setLoading(true);
    call
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
    return controller.abort();
  }, [apiCall]);

  useEffect(() => {
    if (options?.autoFetch ?? true) return fetch();
  }, [fetch, options]);

  return { loading, data, error, fetch } as UseApiResult<T>;
};
