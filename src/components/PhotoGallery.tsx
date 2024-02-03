import useSearchPhotos from "../hooks/useSearchPhotos";
import {
  Box,
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
import useSearchInput from "../store";

interface Props {
  searchText: string;
}

const useConditionalPhotos = (searchText: string) => {
  return searchText === ""
    ? usePhotos("/photos")
    : useSearchPhotos("/search/photos", searchText);
};

const PhotoGallery = () => {
  const { searchInput } = useSearchInput();
  const { data, error, isLoading } = useConditionalPhotos(searchInput);

  if (!data || data.length === 0) {
    return <Text fontSize="2xl">No Images Found</Text>;
  }

  if (isLoading) return <Spinner size="lg" />;

  if (error) {
    console.log(error);
  }

  return (
    <Box w="100%" mx="auto" sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}>
      {data.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoCard photo={photo} />
        </PhotoContainer>
      ))}
    </Box>
  );
};

export default PhotoGallery;
