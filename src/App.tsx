import { Button, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(search) => {
              setSearch(search);
            }}
          />
        </GridItem>
        <GridItem paddingX="10px" area="main">
          <HomePage searchText={search} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
