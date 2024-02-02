import { createContext } from "react";

interface SearchContextProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export default SearchContext;
