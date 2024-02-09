import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIPAddressInfo } from "../services/getIPAddressInfo";

const InfoCard = () => {
  const queryClient = useQueryClient();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ip"],
    queryFn: getIPAddressInfo,
  });

  const { ip, isp, location } = data;

  return (
    <div className="me-auto ms-auto grid max-w-5xl grid-cols-4 justify-items-center gap-4 rounded bg-white p-8">
      <div className="grid gap-4">
        <p className="border-r-gray-300 text-sm font-semibold uppercase text-gray-500">
          IP Address
        </p>
        {isPending && <p>Getting IP...</p>}
        <p>{ip}</p>
      </div>
      <div className="grid gap-4">
        <p className="text-sm font-semibold uppercase text-gray-500">
          Location
        </p>
        {isPending && <p>Geting Location...</p>}
        <p>{location.region}</p>
      </div>
      <div className="grid gap-4">
        <p className="text-sm font-semibold uppercase text-gray-500">
          Timezone
        </p>
        {isPending && <p>Geting Timezone...</p>}
        <p>{location.timezone}</p>
      </div>
      <div className="grid gap-4">
        <p className="text-sm font-semibold uppercase text-gray-500">ISP</p>
        {isPending && <p>Geting ISP info...</p>}
        <p>{isp}</p>
      </div>
    </div>
  );
};

export { InfoCard };
