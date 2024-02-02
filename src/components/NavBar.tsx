import { Box, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo_black from "../assets/unsplash_icon.svg";
import logo_white from "../assets/unsplash_icon_white.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searhText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "dark" ? logo_white : logo_black;

  return (
    <HStack padding="10px">
      <Image src={logoSrc} boxSize="50px" alt="Unsplash Logo" />
      <Box width={"100%"}>
        <SearchInput onSearch={onSearch} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
