import { Box, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo_black from "../assets/unsplash_icon.svg";
import logo_white from "../assets/unsplash_icon_white.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (searhText: string) => void;
}

const NavBar = () => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "dark" ? logo_white : logo_black;

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          w="100%"
          h="auto"
          src={logoSrc}
          boxSize="50px"
          alt="Unsplash Logo"
        />
      </Link>
      <Box width={"100%"}>
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
