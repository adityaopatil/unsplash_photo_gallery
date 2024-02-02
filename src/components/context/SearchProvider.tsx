import { ReactNode, useState } from "react";
import SearchContext from "./SearchContext";

interface Props {
  children: ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
