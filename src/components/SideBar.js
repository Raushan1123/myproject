import React from "react";
import {
  Box,
  List,
  ListItem,
  makeStyles,
  Paper,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpIcon from "@material-ui/icons/Help";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";

import { Link } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import {
  APP_FAQs,
  APP_HOME,
  APP_NOTIFICATIONS,
  APP_REPORTS,
} from "../api/endpoints";
import { SIDE_DRAWER_WIDTH } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "calc(100vh - 50px)",
    background: blue["A700"],
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    height: "50px",
  },
  active: {
    borderLeft: "2px solid white",
  },
}));

const SideBar = (props) => {
  const { location } = props;

  const checkActiveLink = (path) => {
    return location.pathname.indexOf(path) !== -1;
  };

  const classes = useStyles();
  return (
    <Box
      component={Paper}
      elevation={0}
      width={SIDE_DRAWER_WIDTH}
      height={`calc(100vh - 50px)`}
      display="flex"
      flexDirection="column"
      borderRadius={0}
      className={classes.root}
    >
      <List component={Box} className={classes.list}>
        <ListItem
          button
          component={Link}
          to={APP_HOME}
          className={`active ${classes.listItem} ${
            checkActiveLink(APP_HOME) && classes.active
          }`}
        >
          <HomeIcon />
        </ListItem>
        <ListItem
          button
          component={Link}
          to={APP_REPORTS}
          className={`${classes.listItem} ${
            checkActiveLink(APP_REPORTS) && classes.active
          }`}
        >
          <DescriptionIcon />
        </ListItem>
        <ListItem
          button
          component={Link}
          to={APP_NOTIFICATIONS}
          className={`${classes.listItem} ${
            checkActiveLink(APP_NOTIFICATIONS) && classes.active
          }`}
        >
          <NotificationsIcon />
        </ListItem>
        <ListItem
          button
          component={Link}
          to={APP_FAQs}
          className={`${classes.listItem} ${
            checkActiveLink(APP_FAQs) && classes.active
          }`}
        >
          <HelpIcon />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
