import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import {
  CircularProgressbar,
 
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const percentage = 78;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 230,
    width: 280,
    marginRight:40,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(3),
    padding: 50,
  },
}));
export default function Cir() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={5}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs >
          <Paper elevation = {2} className={classes.paper}>
          <h3>Cloud Storage</h3>
            <div style={{ padding: "30px 60px 60px 80px" }}>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <Button variant="contained" className = 'circularbutton'> Storage</Button>
            </div>
            
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
