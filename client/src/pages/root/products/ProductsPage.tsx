import Header from "@/components/products/Header";
import ProductsTable from "@/components/products/ProductsTable";
import SortedBy from "@/components/products/SortedBy";
import Pagination from "@/components/shared/Pagination";
import ProductsTableSkeleton from "@/components/skeletons/ProductsTableSkeleton";
import { Button } from "@/components/ui/button";
import useGetAllProducts from "@/hooks/products/useGetAllProducts";
import { sortedType } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [sortedBy, setSortedBy] = useState<sortedType>("latest");
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, isLoading, refetch, isRefetching, isError, isRefetchError } =
    useGetAllProducts(page, sortedBy);

  useEffect(() => {
    refetch();
  }, [refetch, sortedBy]);

  if (isLoading) {
    return <ProductsTableSkeleton />;
  }

  if (isError || isRefetchError)
    return (
      <div className="flex flex-col items-center justify-center w-full h-full z-10 gap-3">
        <p className="text">Something went wrong</p>
        <Button onClick={() => refetch()} className="flex items-center gap-2">
          <p>Try again</p>
          {isRefetching && <Loader2 className="size-4 animate-spin" />}
        </Button>
      </div>
    );

  if (!data)
    return (
      <div className="flex flex-col items-center justify-center h-full w-full z-10 gap-3">
        <p className="text">No products added yet</p>
        <Link to={"/create-product"}>
          <Button>Add Products</Button>
        </Link>
      </div>
    );

  return (
    <div className="p-5 w-full flex flex-col gap-3 z-10">
      <div className="min-h-[33.6rem]">
        <div className="p-5 bg-background border rounded-sm shadow-sm flex flex-col gap-5">
          <div className="flex justify-end md:justify-between items-center">
            <Header data={data} />
            <SortedBy
              sortedBy={sortedBy}
              setSortedBy={setSortedBy}
              isLoading={isRefetching}
            />
          </div>
          <ProductsTable data={data} />
          <Pagination totalPages={data.totalPages} currentPage={Number(page)} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
