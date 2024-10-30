import axios from "axios"
import { FetchImagesResponse } from "./types";


const ACESS_KEY = "Ipp6GWlm8H_ntiYrF9QYLFI7wdHFz48wPUkVUkQjkiQ"

export const fetchImages = async (
  searchQuery: string,
  currentPage: number) : Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>("search/photos", {
    params: {
      client_id: ACESS_KEY,
      query: searchQuery,  
      page: currentPage,
      per_page: 10,
      orientation: "landscape",
    },
  });
  return response.data;  
};

 
