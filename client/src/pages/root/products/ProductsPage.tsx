import Header from "@/components/products/Header";
import ProductsTable from "@/components/products/ProductsTable";
import SortedBy from "@/components/products/SortedBy";
import Pagination from "@/components/shared/Pagination";
import ProductsTableSkeleton from "@/components/skeletons/ProductsTableSkeleton";
import { Button } from "@/components/ui/button";

import useGetAllProducts from "@/hooks/products/useGetAllProducts";
import { sortedType } from "@/lib/types";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [sortedBy, setSortedBy] = useState<sortedType>("latest");
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, isLoading, refetch, isRefetching } = useGetAllProducts(
    page,
    sortedBy
  );

  useEffect(() => {
    refetch();
  }, [refetch, sortedBy]);

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
        <SortedBy
          sortedBy={sortedBy}
          setSortedBy={setSortedBy}
          isLoading={isRefetching}
        />
      </div>
      <div className="min-h-[33.6rem]">
        <div className="p-5 bg-background border rounded-sm shadow-sm">
          <ProductsTable data={data} />
        </div>
      </div>
      <Pagination totalPages={data.totalPages} currentPage={Number(page)} />
    </div>
  );
};

export default ProductsPage;
