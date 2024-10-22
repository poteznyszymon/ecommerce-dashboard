import { ChevronDown, Loader2 } from "lucide-react";
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          {!isLoading ? (
            <div className="flex w-16 justify-center items-center">
              <p className="font-semibold">{sortedBy}</p>
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
          Latest
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortedBy("oldest")}>
          Oldest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortedBy;
