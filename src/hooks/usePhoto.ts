import { useEffect, useState } from "react";
import { PhotoResponse } from "./useSearchPhotos";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";

const usePhoto = (endPoint: string) =>
  useQuery<PhotoResponse, Error>({
    queryKey: ["photo"],
    queryFn: () => apiClient.get(endPoint).then((res) => res.data),
  });

export default usePhoto;
