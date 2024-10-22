import Header from "@/components/products/Header";
import ProductsTable from "@/components/products/ProductsTable";
import Pagination from "@/components/shared/Pagination";
import ProductsTableSkeleton from "@/components/skeletons/ProductsTableSkeleton";
import { Button } from "@/components/ui/button";

import useGetAllProducts from "@/hooks/products/useGetAllProducts";
import { ChevronDown } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, isLoading } = useGetAllProducts(page);

  if (isLoading) {
    return <ProductsTableSkeleton />;
  }

  if (!data)
    return (
      <div className="flex flex-col items-center justify-center w-full z-10 gap-3">
        <p className="text-xl">No products added yet</p>
        <Link to={"/create-product"}>
          <Button>Add Products</Button>
        </Link>
      </div>
    );

  return (
    <div className="p-5 w-full flex flex-col gap-3 z-10">
      <div className="flex justify-between items-center">
        <Header data={data} />
        <p className="text-sm flex items-center gap-1">
          Sorted by <span className="font-semibold">latest</span>
          <ChevronDown className="size-4" />
        </p>
      </div>
      <div className="min-h-[33rem]">
        <div className="p-5 bg-background border rounded-sm shadow-sm">
          <ProductsTable data={data} />
        </div>
      </div>
      <Pagination totalPages={data.totalPages} currentPage={Number(page)} />
    </div>
  );
};

export default ProductsPage;
