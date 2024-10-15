import InfoTile from "@/components/dashboard/InfoTile";
import InfoTilesSkeleton from "@/components/skeletons/InfoTilesSkeleton";
import useGetOrdersInfo from "@/hooks/orders/useGetOrdersInfo";
import { Calendar, CreditCard, DollarSign, ShoppingCart } from "lucide-react";

const DashboardPage = () => {
  const { data, isLoading } = useGetOrdersInfo();
  const infoData = [
    {
      title: "Total Revenue",
      icon: DollarSign,
      data: data?.totalRevenue,
      procentChange: 0,
      dollarPrefix: true,
    },
    {
      title: "Total Orders",
      icon: ShoppingCart,
      data: data?.totalOrders,
      procentChange: 0,
      dollarPrefix: false,
    },
    {
      title: "Orders Today",
      icon: Calendar,
      data: data?.ordersToday,
      procentChange: 0,
      dollarPrefix: false,
    },
    {
      title: "Average Order Value",
      icon: CreditCard,
      data: data?.averageOrderValue,
      procentChange: 0,
      dollarPrefix: true,
    },
  ];

  return (
    <div className="min-h-screen w-full z-10 p-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {isLoading && <InfoTilesSkeleton numberOfTiles={infoData.length} />}
        {!isLoading &&
          infoData.map((item, idx) => (
            <InfoTile
              key={idx}
              title={item.title}
              icon={item.icon}
              data={item.data ? item.data : 0}
              procentChange={item.procentChange}
              dollarPrefix={item.dollarPrefix}
            />
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;
