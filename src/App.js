import logo from './logo.svg';
import './App.css'
import { Paper, Typography, Grid } from '@material-ui/core';
import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx"
import { display } from '@material-ui/system';

const dopeShadow = "rgba(0, 0, 0, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;"
const dopeShadowH = "rgba(0, 0, 0, 0.25) 0px 25px 50px -10px, rgba(0, 0, 0, 0.3) 0px 15px 30px -15px, rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;"
const buttonSize = "75px";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  main: {
    minHeight: "100vh",
    background: "linear-Gradient(to right top, #65dfc9, #6cdbeb)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  glass: {
    background: "white",
    height: "80vh",
    width: "60%",
    background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))",
    borderRadius: "2rem",
    zIndex: "2",
    backdropFilter: "blur(2rem)"
  },
  circle: {
    background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3))",
    height: "15rem",
    width: "15rem",
    position: "absolute",
    borderRadius: "50%"
  },
  circle1: {
    top: "5%",
    right: "15%"
  },
  circle2: {
    bottom: "5%",
    left: "10%"
  },
  sidebar: {
    height: "inherit",
    borderRadius: "0",
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
    minWidth: "20% "
  },
  button: {
    height: buttonSize,
    width: buttonSize,
    //boxShadow: "0px 8px 18px 4px rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 0 0 / 40%)",
    textAlign: "center",
    borderRadius: "14%"
  },
  stopCount: {
    width: buttonSize,
    height: buttonSize
  },
  middleCard: {
    width: "100%",
    margin: "0",

  }

}));

function App() {
  const [count, setCount] = useState({
    stops: 0
  });
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <main className={classes.main}>
        <section className={classes.glass}>
          {/* <div className={classes.sidebar}>

          </div> */}
          <Grid container justify={"center"} spacing={6} className={classes.middleCard}>
            <Grid item>
              <Paper elevation={0} className={clsx(classes.button, classes.stopMin)}>
                <svg width={buttonSize} height={buttonSize} viewBox={"0 0 " + { buttonSize } + " " + { buttonSize }} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9999 43.9997H26.3322C23.7165 43.9997 22.4313 40.8153 24.3141 38.9997L36.2255 27.5138C38.2592 25.5527 41.4802 25.5527 43.5139 27.5138L55.4252 38.9997C57.3081 40.8153 56.0229 43.9997 53.4072 43.9997H47.9999L47.9999 53.9997V59.9997C47.9999 61.1043 47.1045 61.9997 45.9999 61.9997H33.9999C32.8953 61.9997 31.9999 61.1043 31.9999 59.9997L31.9999 53.9997V43.9997Z" fill="#000000" />
                  <path d="M31.9999 43.9997V41.9997C33.1045 41.9997 33.9999 42.8952 33.9999 43.9997H31.9999ZM24.3141 38.9997L25.7024 40.4394L25.7024 40.4394L24.3141 38.9997ZM36.2255 27.5138L37.6138 28.9535V28.9535L36.2255 27.5138ZM43.5139 27.5138L44.9022 26.0741L44.9022 26.0741L43.5139 27.5138ZM55.4252 38.9997L56.8135 37.56L55.4252 38.9997ZM47.9999 43.9997H45.9999C45.9999 42.8952 46.8953 41.9997 47.9999 41.9997V43.9997ZM47.9999 53.9997H45.9999H47.9999ZM31.9999 59.9997H29.9999H31.9999ZM31.9999 53.9997H33.9999H31.9999ZM26.3322 41.9997H31.9999V45.9997H26.3322V41.9997ZM25.7024 40.4394C25.1148 41.006 25.5159 41.9997 26.3322 41.9997V45.9997C21.9171 45.9997 19.7477 40.6247 22.9259 37.56L25.7024 40.4394ZM37.6138 28.9535L25.7024 40.4394L22.9259 37.56L34.8372 26.0741L37.6138 28.9535ZM42.1256 28.9535C40.8667 27.7395 38.8727 27.7395 37.6138 28.9535L34.8372 26.0741C37.6457 23.3659 42.0937 23.3659 44.9022 26.0741L42.1256 28.9535ZM54.037 40.4394L42.1256 28.9535L44.9022 26.0741L56.8135 37.56L54.037 40.4394ZM53.4072 41.9997C54.2235 41.9997 54.6245 41.006 54.037 40.4394L56.8135 37.56C59.9916 40.6247 57.8223 45.9997 53.4072 45.9997V41.9997ZM47.9999 41.9997H53.4072V45.9997H47.9999V41.9997ZM45.9999 53.9997L45.9999 43.9997H49.9999L49.9999 53.9997H45.9999ZM45.9999 59.9997V53.9997H49.9999V59.9997H45.9999ZM45.9999 59.9997H49.9999C49.9999 62.2089 48.209 63.9997 45.9999 63.9997V59.9997ZM33.9999 59.9997H45.9999V63.9997H33.9999V59.9997ZM33.9999 59.9997H33.9999V63.9997C31.7908 63.9997 29.9999 62.2089 29.9999 59.9997H33.9999ZM33.9999 53.9997L33.9999 59.9997H29.9999L29.9999 53.9997H33.9999ZM33.9999 43.9997V53.9997H29.9999V43.9997H33.9999Z" fill="#000000" />
                  <path d="M56 16H24" stroke="#000000" stroke-width="6" stroke-linecap="round" />
                </svg>
              </Paper>
            </Grid>
            <Grid item><Typography className={classes.stopCount}>{count.stops}</Typography></Grid>
            <Grid item>
              <Paper elevation={0} className={clsx(classes.button, classes.stopPlus)}>
                <svg width={buttonSize} height={buttonSize} viewBox={"0 0 " + { buttonSize } + " " + { buttonSize }} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9999 43.9997H26.3322C23.7165 43.9997 22.4313 40.8153 24.3141 38.9997L36.2255 27.5138C38.2592 25.5527 41.4802 25.5527 43.5139 27.5138L55.4252 38.9997C57.3081 40.8153 56.0229 43.9997 53.4072 43.9997H47.9999L47.9999 53.9997V59.9997C47.9999 61.1043 47.1045 61.9997 45.9999 61.9997H33.9999C32.8953 61.9997 31.9999 61.1043 31.9999 59.9997L31.9999 53.9997V43.9997Z" fill="#000000" />
                  <path d="M31.9999 43.9997V41.9997C33.1045 41.9997 33.9999 42.8952 33.9999 43.9997H31.9999ZM24.3141 38.9997L25.7024 40.4394L25.7024 40.4394L24.3141 38.9997ZM36.2255 27.5138L37.6138 28.9535V28.9535L36.2255 27.5138ZM43.5139 27.5138L44.9022 26.0741L44.9022 26.0741L43.5139 27.5138ZM55.4252 38.9997L56.8135 37.56L55.4252 38.9997ZM47.9999 43.9997H45.9999C45.9999 42.8952 46.8953 41.9997 47.9999 41.9997V43.9997ZM47.9999 53.9997H45.9999H47.9999ZM31.9999 59.9997H29.9999H31.9999ZM31.9999 53.9997H33.9999H31.9999ZM26.3322 41.9997H31.9999V45.9997H26.3322V41.9997ZM25.7024 40.4394C25.1148 41.006 25.5159 41.9997 26.3322 41.9997V45.9997C21.9171 45.9997 19.7477 40.6247 22.9259 37.56L25.7024 40.4394ZM37.6138 28.9535L25.7024 40.4394L22.9259 37.56L34.8372 26.0741L37.6138 28.9535ZM42.1256 28.9535C40.8667 27.7395 38.8727 27.7395 37.6138 28.9535L34.8372 26.0741C37.6457 23.3659 42.0937 23.3659 44.9022 26.0741L42.1256 28.9535ZM54.037 40.4394L42.1256 28.9535L44.9022 26.0741L56.8135 37.56L54.037 40.4394ZM53.4072 41.9997C54.2235 41.9997 54.6245 41.006 54.037 40.4394L56.8135 37.56C59.9916 40.6247 57.8223 45.9997 53.4072 45.9997V41.9997ZM47.9999 41.9997H53.4072V45.9997H47.9999V41.9997ZM45.9999 53.9997L45.9999 43.9997H49.9999L49.9999 53.9997H45.9999ZM45.9999 59.9997V53.9997H49.9999V59.9997H45.9999ZM45.9999 59.9997H49.9999C49.9999 62.2089 48.209 63.9997 45.9999 63.9997V59.9997ZM33.9999 59.9997H45.9999V63.9997H33.9999V59.9997ZM33.9999 59.9997H33.9999V63.9997C31.7908 63.9997 29.9999 62.2089 29.9999 59.9997H33.9999ZM33.9999 53.9997L33.9999 59.9997H29.9999L29.9999 53.9997H33.9999ZM33.9999 43.9997V53.9997H29.9999V43.9997H33.9999Z" fill="#000000" />
                  <path d="M56 16H24" stroke="#000000" stroke-width="6" stroke-linecap="round" />
                </svg>
              </Paper>
            </Grid>
          </Grid>
        </section>

      </main>
      <div className={clsx(classes.circle, classes.circle1)}></div>
      <div className={clsx(classes.circle, classes.circle2)}></div>
    </Paper>
  );
}

export default App;
