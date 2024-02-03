import React from "react";
import SearchProvider from "../components/context/SearchProvider";
import { Grid, GridItem } from "@chakra-ui/react";
import PhotoGallery from "../components/PhotoGallery";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <Grid templateColumns={{ base: "1fr" }}>
      <GridItem paddingX={4}>
        <PhotoGallery />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
