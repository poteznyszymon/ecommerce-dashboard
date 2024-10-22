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
    <p className="text-sm">
      Showing {startIndex}-{endIndex} of {data.totalProducts} results.
    </p>
  );
};

export default Header;
