import { Grid, Typography } from "@mui/material";
import React from "react";
import { countProps } from "../types/componentTypes";

const Count: React.FC<countProps> = ({ todo}) => {
  const c = todo.filter(tdo => tdo.isComplete)
  return (
    <Grid container>
      <Grid item xs={9} md={6} sm={12}>
        <Typography variant="body1" sx={{ fontSize: "32px" }}>
          Count : {todo.length}
        </Typography>
      </Grid>
      <Grid item xs={3} md={6} sm={12}>
        <Typography variant="body1" sx={{ fontSize: "32px", float: "right" }}>
          complete Count : {c.length}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Count;