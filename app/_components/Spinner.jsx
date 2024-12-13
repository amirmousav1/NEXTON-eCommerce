function Spinner() {
  return (
    <div className="grid col-span-5 min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="w-16 h-16 animate-spin text-gray-900/50"
        viewBox="0 0 64 64"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          d="M32 3a29 29 0 1 1 0 58 29 29 0 0 1 0-58"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          d="M32 3a29 29 0 0 1 27.576 37.976"
          className="text-gray-900"
        ></path>
      </svg>
    </div>
  );
}

export default Spinner;
