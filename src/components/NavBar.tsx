import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo_black from "../assets/unsplash_icon.svg";
import logo_white from "../assets/unsplash_icon_white.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "dark" ? logo_white : logo_black;

  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logoSrc} boxSize="50px" alt="Unsplash Logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
