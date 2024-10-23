import { getProductData } from "@/lib/types";

interface HeaderProps {
  data: getProductData;
}

const Header = ({ data }: HeaderProps) => {
  const startIndex =
    data.currentPage === 1 ? 1 : (data.currentPage - 1) * data.pageSize + 1;
  const endIndex =
    data.products.length < data.pageSize
      ? (data.currentPage - 1) * data.pageSize + data.products.length
      : data.currentPage * data.pageSize;
  return (
    <p className="text-sm hidden md:block bg-secondary px-3 py-1 rounded-full text-muted-foreground">
      Showing <span className="font-semibold">{startIndex}</span>-
      <span className="font-semibold">{endIndex}</span> of{" "}
      <span className="font-semibold">{data.totalProducts}</span> results.
    </p>
  );
};

export default Header;
