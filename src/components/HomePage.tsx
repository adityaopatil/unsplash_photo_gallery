import React from "react";
import useSearchPhotos from "../hooks/useSearchPhotos";
import {
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import PhotoContainer from "./PhotoContainer";
import PhotoCard from "./PhotoCard";
import usePhotos from "../hooks/usePhotos";

interface Props {
  searchText: string;
}

const useConditionalPhotos = (searchText: string) => {
  return searchText === ""
    ? usePhotos("/photos")
    : useSearchPhotos("/search/photos", searchText);
};

const HomePage = ({ searchText }: Props) => {
  const { data, error, isLoading } = useConditionalPhotos(searchText);

  if (!data || data.length === 0) {
    return <Text fontSize="2xl">No Images Found</Text>;
  }

  if (isLoading) return <Spinner size="lg" />;

  if (error) {
    console.log(error);
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
      {data.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoCard photo={photo} />
        </PhotoContainer>
      ))}
    </SimpleGrid>
  );
};

export default HomePage;
