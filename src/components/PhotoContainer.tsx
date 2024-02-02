import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PhotoContainer = ({ children }: Props) => {
  return (
    <Box margin={2} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default PhotoContainer;
