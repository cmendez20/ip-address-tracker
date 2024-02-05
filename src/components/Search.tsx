const Search = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="rounded rounded-br-none rounded-tr-none px-4 py-2"
      />
      <button className="rounded rounded-bl-none rounded-tl-none bg-sky-950 px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-slate-50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export { Search };
