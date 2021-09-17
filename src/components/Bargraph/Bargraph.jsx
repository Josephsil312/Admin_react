import "./Bargraph.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 230,
    width: 500,
    marginRight:110,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(3),
    padding: 50,
  },
}));
export default function Chartt({ titlee, data, dataKey, grid }) {
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
        <Grid item md = {12} className = 'bargraphpaper' >
          <Paper elevation={2} className={classes.paper}>
            <Typography variant="subtitle1" gutterBottom>
              <h3>{titlee}</h3>
            </Typography>
            <p>
              Sales are activities related to selling or number of goods or
              services sold in a given period of time
            </p>
            goods and services to the customers.
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <YAxis dataKey="Sales" stroke="#5550bd" />
                <Bar type="monotone" dataKey={dataKey} fill="#8884d8" />
                <Tooltip />
                {grid && <CartesianGrid strokeDasharray="5 5" />}
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
