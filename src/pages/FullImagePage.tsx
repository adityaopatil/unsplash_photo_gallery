import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import usePhoto from "../hooks/usePhoto";

const FullImagePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = usePhoto(`/photos/${id}`);

  if (isLoading) return <Spinner />;

  if (error) {
    console.log(error);
    return null;
  }

  if (!data || !data.urls?.full) {
    return <Text>Image Not Found</Text>;
  }

  return (
    <Box>
      <Image src={data.urls.full} />
    </Box>
  );
};

export default FullImagePage;
