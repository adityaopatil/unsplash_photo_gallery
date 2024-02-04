import { useEffect, useState } from "react";
import { PhotoResponse } from "./useSearchPhotos";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";

const usePhoto = (endPoint: string) => {
  return useQuery<PhotoResponse, Error>({
    queryKey: ["photo", endPoint],
    queryFn: () => apiClient.get(endPoint).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, //24Hours
    cacheTime: 1000 * 5,
  });
};

export default usePhoto;
