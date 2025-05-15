import { useState } from "react";
import { Search } from "lucide-react"; // Install: npm i lucide-react

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;