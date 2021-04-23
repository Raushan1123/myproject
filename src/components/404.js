import { Box, Typography } from "@material-ui/core";
import React from "react";

const Error404 = ({ text }) => {
  return (
    <Box width="100%" textAlign="center" overflow="auto">
      <Typography variant="h2">
        {text}
      </Typography>
    </Box>
  );
};

Error404.defaultProps = {
  text: "Oops! Page not found",
};

export default Error404;
