import { SearchIcon } from "@heroicons/react/outline";

type Props = {
  onSearch: (text: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  return (
    <div
      className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer 
    bg-yellow-400 hover:bg-yellow-500 overflow-hidden"
    >
      <input
        type="text"
        className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
};

export default SearchBar;
