import { Box, Card, Typography } from "@material-ui/core";
import React from "react";

const ClosedCases = () => {
  return (
    <Box
      component={Card}
      variant="outlined"
      height="inherit"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">No records found!</Typography>
    </Box>
  );
};

export default ClosedCases;
