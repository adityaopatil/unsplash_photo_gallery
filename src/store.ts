import { create } from "zustand";

interface SearchText {
  searchInput: string;
  setSearchInput: (input: string) => void;
}

const useSearchInput = create<SearchText>((set) => ({
  searchInput: "",
  setSearchInput: (input) => set(() => ({ searchInput: input })),
}));

export default useSearchInput;
