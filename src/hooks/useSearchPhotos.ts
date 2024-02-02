import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface PhotoResponse {
  id: number;
  slug: string;
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

interface FetchResponse {
  total: number;
  total_pages: number;
  results: PhotoResponse[];
}

const useSearchPhotos = (endPoint: string, searchQuery?: string) => {
  const [data, setData] = useState<PhotoResponse[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse>(endPoint, {
        signal: controller.signal,
        params: {
          query: searchQuery,
          page: 1,
        },
      })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [searchQuery]);

  return { data, error, isLoading };
};

export default useSearchPhotos;
