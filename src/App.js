import logo from './logo.svg';
import './App.css'
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx"

const dopeShadow = "rgba(0, 0, 0, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;"
const dopeShadowH = "rgba(0, 0, 0, 0.25) 0px 25px 50px -10px, rgba(0, 0, 0, 0.3) 0px 15px 30px -15px, rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;"

const useStyles = makeStyles((theme) => ({
  top: {
    width: "auto",
    textAlign: "center"
  },
  root: {
    width: "auto",
    height: "auto",
    display: "inline-block",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: dopeShadow,
    backgroundColor: "#06D6A0"
  },
  counter: {
    margin: "24px",
    paddingLeft: "48px",
    paddingRight: "48px"
  },
  block: {
    height: "100px",
    width: "100px",
    display: "inline-block",
    margin: "40px 20px",
    borderRadius: "20px",
    boxShadow: dopeShadow,
    transition: theme.transitions.create(['all'], {
      duration: ".3",
      easing: theme.transitions.easing.easeIn
    }),
    "&:active": {
      boxShadow: dopeShadowH
    }

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Paper className={classes.root}>
        <div className={classes.counter}>
          <Paper className={clsx(classes.plus, classes.block)}>
            +
        </Paper>
          <Paper className={clsx(classes.count, classes.block)}>
            #
        </Paper>
          <Paper className={clsx(classes.minus, classes.block)}>
            -
        </Paper>
        </div>
      </Paper>
    </div>
  );
}

export default App;
