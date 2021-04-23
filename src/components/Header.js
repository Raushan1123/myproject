import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Avatar,
  Box,
  Divider,
  Icon,
  makeStyles,
  Paper,
} from "@material-ui/core";
import Settings from "@material-ui/icons/Settings";
import { HEADER_HEIGHT } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    height: HEADER_HEIGHT,
    padding: theme.spacing(0, 3, 0, 1),
    position: "sticky",
    top: 0,
  },
  divider: {
    height: "30px",
    margin: theme.spacing(0, 2),
  },
  avatar: {
    width: "40px",
    height: "40px",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box
      component={Paper}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={0}
      className={classes.root}
    >
      <Box display="flex" alignItems="center" pl={1}>
        <Icon>
          <MenuIcon />
        </Icon>
        <Typography
          variant="h4"
          component={Box}
          ml="15px !important"
          color="primary"
          fontWeight={600}
        >
          SHAHI
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Icon className="csp">
          <Settings />
        </Icon>
        <Divider orientation="vertical" className={classes.divider} />
        <Avatar alt="RK" className={`csp ${classes.avatar}`}></Avatar>
      </Box>
    </Box>
  );
}

export default Header;
