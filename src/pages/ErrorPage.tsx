import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={2}>
        <Heading>Oops...</Heading>
        <Text marginTop={2}>
          {isRouteErrorResponse(error)
            ? "The page does not exists"
            : "An unexpected Error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
