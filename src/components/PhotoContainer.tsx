import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PhotoContainer = ({ children }: Props) => {
  return (
    <Box marginY={8} marginX={2} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default PhotoContainer;
