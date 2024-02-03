import React from "react";
import SearchProvider from "../components/context/SearchProvider";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import PhotoGallery from "../components/PhotoGallery";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
