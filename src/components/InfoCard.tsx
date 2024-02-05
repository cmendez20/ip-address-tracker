const InfoCard = () => {
  return (
    <div className="me-auto ms-auto grid max-w-5xl grid-cols-4 justify-items-center gap-4 rounded bg-white p-8">
      <p className="border-r-gray-300 text-sm font-semibold uppercase text-gray-500">
        IP Address
      </p>
      <p className="text-sm font-semibold uppercase text-gray-500">Location</p>
      <p className="text-sm font-semibold uppercase text-gray-500">Timezone</p>
      <p className="text-sm font-semibold uppercase text-gray-500">ISP</p>
    </div>
  );
};

export { InfoCard };
