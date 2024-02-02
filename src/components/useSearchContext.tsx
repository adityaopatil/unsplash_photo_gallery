import { useContext } from "react";
import { SearchContext } from "./SearchContext";

const useSearchContext = () => useContext(SearchContext);

export default useSearchContext;
