import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Hidden,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import UnreadCases from "./UnreadCases";
import ClosedCases from "./ClosedCases";

const TAB_NAMES = ["NEW/UNREAD CASES", "OUTSTANDING AND CLOSED CASES"];

const TABS = [<UnreadCases />, <ClosedCases />];

const useStyles = makeStyles({});

const CaseCard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e, newValue) => setTabIndex(newValue);

  const classes = useStyles();

  return (
    <Box component={Card} variant="outlined">
      <Box component={Grid} container overflow="auto">
        <Grid item xs={12}>
          <Box
            component={Grid}
            container
            alignItems="center"
            position="relative"
          >
            <Grid item xs={12} sm={9}>
              <Tabs
                value={tabIndex}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
              >
                {TAB_NAMES.map((text) => (
                  <Tab
                    key={text}
                    label={text}
                    wrapped={true}
                    className={classes.tab}
                  />
                ))}
              </Tabs>
            </Grid>
            <Hidden xsDown>
              <Box component={Grid} item pr={3} md={3} textAlign="right">
                <Button variant="outlined" endIcon={<FilterListIcon />}>
                  Filter
                </Button>
              </Box>
            </Hidden>
            <Hidden smUp>
              <Button fullWidth variant="outlined" endIcon={<FilterListIcon />}>
                Filter
              </Button>
            </Hidden>
          </Box>
        </Grid>
        <Box component={Grid} item xs={12}>
          {TABS[tabIndex]}
        </Box>
      </Box>
    </Box>
  );
};

export default CaseCard;
