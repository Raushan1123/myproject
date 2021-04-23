import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router";

import MainRouter from "./router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    width: `calc(100% - 50px)`,
    height: "calc(100vh - 82px)",
    margin: theme.spacing(2),
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Box
        display="flex"
        height={`calc(100vh - 50px))`}
      >
        <SideBar {...props} />
        <Box className={classes.content}>
          <MainRouter {...props} />
        </Box>
      </Box>
    </div>
  );
}

export default withRouter(App);
