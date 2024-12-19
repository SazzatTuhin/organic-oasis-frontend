"use client";

import Loading from "@/components/Loading";
import Products from "@/components/Products";
import { useGetproducts } from "@/hooks/useGetProducts";
import { notFound } from "next/navigation";

const ProductsPage = () => {
  const { data, isLoading } = useGetproducts();

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.products?.length) {
    return notFound();
  }

  return (
    <main>
      <Products />
    </main>
  );
};

export default ProductsPage;
