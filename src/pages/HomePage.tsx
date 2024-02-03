import React from "react";
import SearchProvider from "../components/context/SearchProvider";
import { Grid, GridItem } from "@chakra-ui/react";
import PhotoGallery from "../components/PhotoGallery";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <SearchProvider>
      <Grid
        templateAreas={{ base: `"nav" "main"` }}
        templateColumns={{ base: "1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem paddingX={4} area="main">
          <PhotoGallery />
        </GridItem>
      </Grid>
    </SearchProvider>
  );
};

export default HomePage;
