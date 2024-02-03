import React from "react";
import { PhotoResponse } from "../hooks/useSearchPhotos";
import { Card, CardBody, Image, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Link
        to={`/photos/${photo.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          w="100%"
          h="auto"
          src={photo.urls?.small}
          alt={photo.alt_description}
        />
      </Link>
      <CardBody>
        <Text>{photo.alt_description}</Text>
      </CardBody>
    </Card>
  );
};

export default PhotoCard;
