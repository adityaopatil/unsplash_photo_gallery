import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface PhotoResponse {
  id: number;
  slug: string;
  alt_description: string;
  urls?: {
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

const useSearchPhotos = (
  endPoint: string,
  searchQuery?: string,
  currentPage?: number
) => {
  return useQuery<PhotoResponse[], Error>({
    queryKey: ["photos", searchQuery, currentPage],
    queryFn: () =>
      apiClient
        .get<FetchResponse>(endPoint, {
          params: {
            query: searchQuery,
            page: currentPage || 1,
            per_page: 12,
          },
        })
        .then((res) => res.data.results),
    staleTime: 1000 * 60, //1min
  });
};

export default useSearchPhotos;
