import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { Loader2 } from "lucide-react";

interface LoadingButton extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({
  loading,
  disabled,
  className,
  ...props
}: LoadingButton) => {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2 ", className)}
    >
      {props.children}
      {loading && <Loader2 className="size-4 animate-spin " />}
    </Button>
  );
};

export default LoadingButton;
