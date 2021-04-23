import React from "react";
import { Box, Button, Card, Grid, Icon } from "@material-ui/core";
import {
  InsertDriveFileOutlined,
  MarkunreadOutlined,
  DescriptionOutlined,
} from "@material-ui/icons";

const ITEMS = [
  {
    icon: <InsertDriveFileOutlined fontSize="large" />,
    color: "green",
    text: "Case Upload",
  },
  {
    icon: <DescriptionOutlined fontSize="large" />,
    color: "blue",
    text: "Generate Report",
  },
  {
    icon: <MarkunreadOutlined fontSize="large" />,
    color: "orange",
    text: "Broadcast Message",
  },
];

const DashboardCard = ({ icon, text, color }) => {
  return (
    <Box
      component={Card}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ background: color }}
    >
      <Icon component={Box} p={4} style={{ color: "white" }}>
        {icon}
      </Icon>
      <Button
        component={Box}
        mb={2}
        variant="contained"
        color="default"
        className="bg-white"
        style={{ color }}
      >
        <b>{text}</b>
      </Button>
    </Box>
  );
};

const DashboardCards = () => {
  return (
    <Grid container spacing={3}>
      {ITEMS.map((item, index) => (
        <Grid item key={index} xs={12} md={4}>
          <DashboardCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;
