import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/unsplash_icon.svg";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" alt="Unsplash Logo" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
