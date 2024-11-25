import Product from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = (await response.json()) as Product[];
      return data;
    },
  });
