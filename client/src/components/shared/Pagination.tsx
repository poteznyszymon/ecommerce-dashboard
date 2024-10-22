import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  return (
    <div className="w-full flex items-center justify-center gap-2">
      <Link to="/products?page=1">
        <Button
          disabled={currentPage === 1}
          variant={"outline"}
          className="aspect-square size-10 p-0"
        >
          <ChevronsLeft strokeWidth={1.3} />
        </Button>
      </Link>
      <Link to={`/products?page=${currentPage - 1}`}>
        <Button
          disabled={currentPage === 1}
          variant={"outline"}
          className="aspect-square size-10 p-0"
        >
          <ChevronLeft strokeWidth={1.3} />
        </Button>
      </Link>
      <p className="text-sm hidden sm:block">
        Page {currentPage} of {totalPages}
      </p>
      <Link to={`/products?page=${currentPage + 1}`}>
        <Button
          disabled={currentPage >= totalPages}
          variant={"outline"}
          className="aspect-square size-10 p-0"
        >
          <ChevronRight strokeWidth={1.3} />
        </Button>
      </Link>
      <Link to={`/products?page=${totalPages}`}>
        <Button
          disabled={currentPage >= totalPages}
          variant={"outline"}
          className="aspect-square size-10 p-0"
        >
          <ChevronsRight strokeWidth={1.3} />
        </Button>
      </Link>
    </div>
  );
};

export default Pagination;
