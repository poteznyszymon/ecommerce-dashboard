import { ChevronDown, Clock, DollarSign, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { sortedType } from "@/lib/types";
import { Button } from "../ui/button";

interface SortedByProps {
  sortedBy: sortedType;
  setSortedBy: React.Dispatch<React.SetStateAction<sortedType>>;
  isLoading: boolean;
}

const SortedBy = ({ sortedBy, setSortedBy, isLoading }: SortedByProps) => {
  let text: string = sortedBy;

  if (sortedBy === "priceDesc") text = "Price Desc";
  else if (sortedBy === "priceAsc") text = "Price Asc";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex items-center gap-1">
          <p className="font-normal">sorted by</p>
          {!isLoading ? (
            <div className="flex  justify-center items-center">
              <p className="font-semibold">{text}</p>
              <ChevronDown strokeWidth={1.4} className="size-5" />
            </div>
          ) : (
            <div>
              <div className="flex w-16 justify-center items-center">
                <Loader2 className="animate-spin size-4" />
              </div>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setSortedBy("latest")}>
          <div className="flex items-center gap-1">
            <Clock strokeWidth={1.4} className="size-4" />
            <p>Latest First</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortedBy("oldest")}>
          <div className="flex items-center gap-1">
            <Clock strokeWidth={1.4} className="size-4" />
            <p>Oldest First</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortedBy("priceDesc")}>
          <div className="flex items-center gap-1">
            <DollarSign strokeWidth={1.4} className="size-4" />
            <p>Price: High to Low</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortedBy("priceAsc")}>
          <div className="flex items-center gap-1">
            <DollarSign strokeWidth={1.4} className="size-4" />
            <p>Price: Low to High</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortedBy;
