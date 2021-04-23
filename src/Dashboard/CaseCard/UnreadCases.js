import React from "react";
import {
  Box,
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import DATA from "../dummyData/unreadCases.json";
import { orange } from "@material-ui/core/colors";

const COLUMNS = [
  "CASE NO.",
  "BRANCH",
  "REPORTING METHOD",
  "DATE",
  "TIME",
  "CATEGORY",
  "SUB CATEGORY",
  "PRIORITY",
  "NATURE",
  "CASE MANAGER",
  "CASE REPORTER",
  "CASE STATUS",
];

const getButtonStyle = (priority) => {
  switch (priority) {
    case "Low":
      return "#ffbf00";
    case "Medium":
      return orange[600];
    case "High":
      return "red";
    default:
      return "white";
  }
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "not prepared":
      return "red";
    case "progress":
      return "orange";
    default:
      return "black";
  }
};

const RenderTableRow = (data, index) => {
  return (
    <TableRow key={index}>
      <TableCell>{data.caseNo}</TableCell>
      <TableCell>{data.branch}</TableCell>
      <TableCell>{data.reportingMethod}</TableCell>
      <TableCell>{data.date}</TableCell>
      <TableCell>{data.time}</TableCell>
      <TableCell>{data.category}</TableCell>
      <TableCell>{data.subCategory}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          style={{
            background: getButtonStyle(data.priority),
            color: "white",
          }}
        >
          {data.priority}
        </Button>
      </TableCell>
      <TableCell>{data.nature}</TableCell>
      <TableCell>{data.caseManager}</TableCell>
      <TableCell>{data.caseReporter}</TableCell>
      <TableCell>
        <Box component="span">
          <Box
            mr="5px"
            component="span"
            width="15px"
            height="15px"
            display="inline-block"
            borderRadius="50%"
            color="red"
            style={{ background: getStatusColor(data.caseStatus) }}
          ></Box>
          {data.caseStatus}
        </Box>
      </TableCell>
    </TableRow>
  );
};

const UnreadCases = () => {
  return (
    <Box height="inherit" component={Card} variant="outlined">
      <TableContainer
        component={Paper}
        style={{
          overflowX: "auto",
          width: "inherit",
          height: "100%",
          flexGrow: 1,
        }}
      >
        <Table stickyHeader style={{ width: "100%" }}>
          <TableHead>
            <TableRow
              variant="outlined"
              style={{ width: "100%", overflow: "auto" }}
            >
              {COLUMNS.map((columnName, index) => (
                <TableCell key={columnName} className="fw-12">
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ border: "2px solid red" }}>
            {DATA.map((data, index) => RenderTableRow(data, index))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UnreadCases;
