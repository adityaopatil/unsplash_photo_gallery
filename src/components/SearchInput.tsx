import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useSearchContext from "./context/useSearchContext";

interface Props {
  onSearch: (searhText: string) => void;
}

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  4;
  const { setSearchText } = useSearchContext();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search images..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
