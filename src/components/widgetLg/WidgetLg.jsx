import "./widgetLg.css";
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
    height: 450,
    width: 700,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: theme.spacing(3),
  },
  
}));
export default function WidgetLg() {
  const classes = useStyles();
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
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
        <Grid item xs={11} >
          <Paper elevation = {2} className={classes.paper}>
          <Typography variant="subtitle1" gutterBottom>
              <h3>Projects</h3>
            </Typography>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh">#</th>
          <th className="widgetLgTh">Project name</th>
          <th className="widgetLgTh">Start date</th>
          <th className="widgetLgTh">Due date</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Assign</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">1</span>
          </td>
          <td className="widgetLgDate">NobelUI React</td>
          <td className="widgetLgDate">01/01/2021</td>
          <td className="widgetLgAmount">01/02/2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgAmount">Leonardo Payne</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">2</span>
          </td>
          <td className="widgetLgDate">Nobel UI Angular</td>
          <td className="widgetLgAmount">01/01/2021</td>
          <td className="widgetLgAmount">03/04/2021</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
          <td className="widgetLgAmount">Carl Henson</td>
      
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">3</span>
          </td>
          <td className="widgetLgDate">NobelUI Javascript</td>
          <td className="widgetLgDate">01/01/2021</td>
          <td className="widgetLgAmount">04/05/2021</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td className="widgetLgAmount">Jenson Combs</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">4</span>
          </td>
          <td className="widgetLgDate">NobelUI Vue</td>
          <td className="widgetLgDate">01/01/2021</td>
          <td className="widgetLgAmount">06/05/2021</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgAmount">Amiah Burton</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">5</span>
          </td>
          <td className="widgetLgDate">NobelUI Laravel</td>
          <td className="widgetLgDate">01/01/2021</td>
          <td className="widgetLgAmount">04/06/2021</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td className="widgetLgAmount">Yaretzi Mayo</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">6</span>
          </td>
          <td className="widgetLgDate">NobelUI Node</td>
          <td className="widgetLgDate">01/01/2021</td>
          <td className="widgetLgAmount">04/07/2021</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td className="widgetLgAmount">Carl Henson</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">7</span>
          </td>
          <td className="widgetLgDate">NobelUI Ember</td>
          <td className="widgetLgDate">01/01/2021</td>
          <td className="widgetLgAmount">05/05/2021</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td className="widgetLgAmount">Jenson Combs</td>
        </tr>
      </table>
      </Paper>
      </Grid>
      </Grid>
    </div>
    
      
    
  );
}
