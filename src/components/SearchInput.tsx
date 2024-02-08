import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useSearchInput from "../store";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searhText: string) => void;
}

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { setSearchInput } = useSearchInput();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchInput(ref.current.value);
        }

        navigate("/", { replace: true });
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
