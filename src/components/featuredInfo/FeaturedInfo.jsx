import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import image1 from '../images/barchart.png';
import image2 from '../images/linechart1.png';
import image3 from '../images/linechart2.png';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 140,
    width: 270,
    marginLeft:20,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: theme.spacing(2),
  },
 
}));
export default function FeaturedInfo() {
  const classes = useStyles();
  return (
    <div>
    <Container maxWidth>
      <Typography variant="subtitle1" gutterBottom>
        <h2>My DashBoard</h2>
      </Typography>
      <Grid
        container
        spacing={2}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item md  >
          <Paper elevation = {2} className={classes.paper}>
            <h2>New Customers</h2>
            <span className="featuredMoney">3897</span>
            <span className="featuredMoneyRate">
              -11.4 %<ArrowDownward className="featuredIcon negative" />
            </span>
            <img src = {image1} alt = '' className = 'image1'/>
          </Paper>
        </Grid>
        <Grid item md >
          <Paper elevation = {2} className={classes.paper}>
            <h2>New Orders</h2>
            <span className="featuredMoney">37, 087</span>
            <span className="featuredMoneyRate">
              -1.4 %<ArrowDownward className="featuredIcon negative" />
            </span>
            <img src = {image2} alt = '' className = 'image2'/>
          </Paper>
        </Grid>
        <Grid item md >
          <Paper elevation = {2} className={classes.paper}>
            <h2>Growth</h2>
            <span className="featuredMoney">89.08%</span>
            <span className="featuredMoneyRate">
              +2.4%
              <ArrowUpward className="featuredIcon" />
            </span>
            <img src = {image3} alt = '' className = 'image3'/>
          </Paper>
        </Grid>
      </Grid>
   
      </Container>
    </div>
  );
}
