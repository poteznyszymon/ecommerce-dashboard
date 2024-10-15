import InfoTile from "@/components/dashboard/InfoTile";
import { CreditCard, DollarSign, ShoppingCart, Users } from "lucide-react";

const DashboardPage = () => {
  const infoData = [
    {
      title: "Total revenue",
      icon: DollarSign,
      data: "45,231.89",
      procentChange: 20.1,
      dollarPrefix: true,
    },
    {
      title: "Total Orders",
      icon: ShoppingCart,
      data: "1,205",
      procentChange: 12.5,
      dollarPrefix: false,
    },
    {
      title: "New Customers",
      icon: Users,
      data: "356",
      procentChange: 18.7,
      dollarPrefix: false,
    },
    {
      title: "Average Order Value",
      icon: CreditCard,
      data: "37.54",
      procentChange: 5.2,
      dollarPrefix: true,
    },
  ];

  return (
    <div className="min-h-screen w-full z-10 p-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {infoData.map((item, idx) => (
          <InfoTile
            key={idx}
            title={item.title}
            icon={item.icon}
            data={item.data}
            procentChange={item.procentChange}
            dollarPrefix={item.dollarPrefix}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
