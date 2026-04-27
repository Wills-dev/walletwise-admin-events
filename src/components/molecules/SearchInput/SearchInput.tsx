import { Search, X } from "lucide-react";
import { SyntheticEvent } from "react";

interface SearchInputProps {
  value: string;
  handleChange: (value: string) => void;
  handleClear: () => void;
  onSubmit: (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => void;
}

const SearchInput = ({
  value,
  handleChange,
  handleClear,
  onSubmit,
}: SearchInputProps) => {
  return (
    <form
      className="max-w-sm w-full relative px-2 h-8 rounded-full focus-within:border-white/50 border border-white/30 flex items-center gap-2 transition-all duration-300"
      onSubmit={onSubmit}
    >
      <button type="submit">
        <Search className="w-6 h-6 text-white/50" />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="outline-none flex-1 text-white/80"
      />
      {value && (
        <button type="button" onClick={handleClear} className="cursor-pointer">
          <X className="w-4 h-4 text-red-500" />
        </button>
      )}
    </form>
  );
};

export default SearchInput;
