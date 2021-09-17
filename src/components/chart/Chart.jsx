import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 330,
    width: 980,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(3),
  },
  
}));
export default function Chart({ title, data, dataKey, grid }) {
  const classes = useStyles();
  return (
    <div >
    <Grid
        container
        spacing={5}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
      <Grid item sm = {11} >
          <Paper className={classes.paper}>
      <Typography variant="subtitle1" gutterBottom>
              <h3>{title}</h3>
            </Typography>
      <p>Revenue is the income that a business has from it's normal business activities,usually from the sale of</p><p>
        goods and services to the customers.
      </p>
      <div className = 'buttons'>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" >
        <Button>Today</Button>
        <Button>Week</Button>
        <Button>Month</Button>
      </ButtonGroup>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis dataKey="Active User" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
      </Paper>
      </Grid>
      
      </Grid>
    </div>
  );
}
