import { useEffect, useState } from "react";
import { PhotoResponse } from "./useSearchPhotos";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const usePhotos = (endPoint: string, currentPage?: number) =>
  useQuery<PhotoResponse[], Error>({
    queryKey: ["photos", currentPage],
    queryFn: () =>
      apiClient
        .get<PhotoResponse[]>(endPoint, {
          params: {
            page: currentPage || 1,
          },
        })
        .then((res) => res.data),
    // staleTime: 1000 * 60 * 60 * 24, //24Hours
  });

export default usePhotos;
