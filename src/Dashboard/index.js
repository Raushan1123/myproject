import { Box, Grid } from "@material-ui/core";
import React from "react";
import CaseCard from "./CaseCard";
import DashboardCards from "./DashboardCards";

const Dashboard = () => {
  return (
    <Box width="inherit" style={{ overflowX: "hidden" }}>
      <Box
        component={Grid}
        container
        justify="space-between"
        direction="column"
        spacing={3}
        overflow="auto"
      >
        <Grid item xs={12}>
          <DashboardCards />
        </Grid>
        <Grid item xs={12} style={{ flex: 1 }}>
          <CaseCard />
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
