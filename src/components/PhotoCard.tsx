import React from "react";
import { PhotoResponse } from "../hooks/useSearchPhotos";
import { Card, CardBody, Image, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  photo: PhotoResponse;
}

const PhotoCard = ({ photo }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      border={colorMode === "dark" ? "" : "1px"}
      borderColor="gray.200"
      boxShadow="md"
    >
      <Image src={photo.urls.small} />
      <CardBody>
        <Text>{photo.alt_description}</Text>
      </CardBody>
    </Card>
  );
};

export default PhotoCard;
