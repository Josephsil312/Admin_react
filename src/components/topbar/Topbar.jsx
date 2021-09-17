import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 10,
    width: 1000,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 2fr)",
    gridGap: theme.spacing(1),
  },
}));
export default function Topbar() {
  const classes = useStyles();
  return (
    <div className="topbar">
      <Grid
        container
        spacing={3}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="topbarWrapper">
              <div className="topLeft">
             
                <span className="logo">NobelUI</span>
                
              </div>
              
              <div className="topRight">
                <SearchOutlinedIcon className="searchicon" />
                <input className="search" placeholder="Search" />
                <div className="topbarIconContainer">
                  <NotificationsNone />
                </div>
                <div className="topbarIconContainer">
                  <MailOutlineIcon />
                </div>
                <div className="topbarIconContainer">
                  <img
                    src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="topAvatar"
                  />
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
