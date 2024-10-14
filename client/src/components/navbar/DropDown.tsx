import { ChevronDown, ChevronLeft, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import useAuthUser from "@/hooks/auth/useGetCurrentUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import useLogoutUser from "@/hooks/auth/useLogoutUser";

const DropDown = () => {
  const { data } = useAuthUser();
  const { logoutUser } = useLogoutUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"ghost"} asChild>
          <div className="flex items-center gap-3">
            <p className="text-md">{data?.username}</p>
            <ChevronDown className="size-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-1  w-full h-full">
            <ChevronLeft className="size-4" strokeWidth={1.7} />
            Theme
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex items-center gap-1  w-full h-full"
            onClick={() => logoutUser()}
          >
            <LogOut className="size-4" strokeWidth={1.7} />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
