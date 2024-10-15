import { LucideIcon } from "lucide-react";

interface InfoTileProps {
  title: string;
  icon: LucideIcon;
  data: string;
  procentChange: number;
  dollarPrefix: boolean;
}

const InfoTile = ({
  title,
  icon: Icon,
  data,
  procentChange,
  dollarPrefix,
}: InfoTileProps) => {
  return (
    <div className="bg-background border h-40 rounded-md shadow-sm flex flex-col justify-between p-5">
      <div className="flex justify-between">
        <p className="text-sm">{title}</p>
        <Icon className="size-4 text-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-2xl">
          {dollarPrefix ? "$" : ""}
          {data}
        </p>
        <p className="text-sm text-muted-foreground">
          {procentChange > 0 ? "+" : ""}
          {procentChange}% from last month
        </p>
      </div>
    </div>
  );
};

export default InfoTile;
