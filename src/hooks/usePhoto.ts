import { useEffect, useState } from "react";
import { PhotoResponse } from "./useSearchPhotos";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const usePhoto = (endPoint: string) => {
  const [data, setData] = useState<PhotoResponse>({} as PhotoResponse);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<PhotoResponse>(endPoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });
    return () => controller.abort();
  }, [endPoint]);

  return { data, error, isLoading };
};

export default usePhoto;
