import { Button, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import PhotoGallery from "./components/PhotoGallery";
import { useState } from "react";
import SearchProvider from "./components/context/SearchProvider";

function App() {
  // const [search, setSearch] = useState("");

  return (
    <>
      <SearchProvider>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
          }}
          templateColumns={{
            base: "1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem paddingX="10px" area="main">
            <PhotoGallery />
          </GridItem>
        </Grid>
      </SearchProvider>
    </>
  );
}

export default App;
