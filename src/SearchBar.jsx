export const SearchBar = ({ city, handleCity, handleSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex gap-3 mb-8 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={handleCity}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
      >
        Search
      </button>
    </div>
  );
};
