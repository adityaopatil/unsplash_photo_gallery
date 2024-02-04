import useSearchPhotos from "../hooks/useSearchPhotos";
import {
  Box,
  Button,
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
import { useEffect, useState } from "react";

interface Props {
  searchText: string;
}

const useConditionalPhotos = (searchQuery: string, currentPage: number) => {
  return searchQuery === ""
    ? usePhotos("/photos", currentPage)
    : useSearchPhotos("/search/photos", searchQuery, currentPage);
};

const PhotoGallery = () => {
  const { searchInput } = useSearchInput();
  const [pageNumber, setPageNumber] = useState(1);
  const { data, error, isLoading } = useConditionalPhotos(
    searchInput,
    pageNumber
  );
  useEffect(() => {
    setPageNumber(1);
  }, [searchInput]);

  if (!data || data.length === 0) {
    return <Text fontSize="2xl">No Images Found</Text>;
  }

  if (isLoading) return <Spinner size="lg" />;

  if (error) {
    console.log(error);
  }

  const handleMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <Box w="100%" mx="auto" sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}>
        {data.map((photo) => (
          <PhotoContainer key={photo.id}>
            <PhotoCard photo={photo} />
          </PhotoContainer>
        ))}
      </Box>
      <Button marginY={4} marginLeft={2} onClick={handleMore}>
        Load More
      </Button>
    </>
  );
};

export default PhotoGallery;
