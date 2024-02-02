import { useEffect, useState } from "react";
import { PhotoResponse } from "./useSearchPhotos";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

const usePhotos = (endPoint: string) => {
  const [data, setData] = useState<PhotoResponse[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<PhotoResponse[]>(endPoint, {
        signal: controller.signal,
        params: {
          per_page: 12,
        },
      })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [endPoint]);
  return { data, error, isLoading };
};

export default usePhotos;
