import { API_BASE_URL } from "@/constants";
import { IProductResponse } from "@/interfaces";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

export const useGetproduct = (productId?: string) => {
  const getProductRequestHandeler = async (): promise<IProductResponse> => {
    const res = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return res.data;
  };

  const { data, isLoading, error } = useQuery<IProductResponse, Error>(
    "fetchProducts",
    getProductRequestHandeler,
    { enabled: !!productId }
  );

  if (error instanceof AxiosError) {
    toast.error(error.response?.data?.message || "An error occurred");
  }

  return { data, isLoading };
};
