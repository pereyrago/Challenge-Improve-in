import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { LOG_OUT, TOOGLEOPEN } from "../../store/actions";
import { useDispatch } from "react-redux";
import "../Container/index.css";

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState({ toogle: false });
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.cont}>
        <Toolbar className={classes.cont}>
          <div className="menuBtn">
            <IconButton
              edge="end"
              className={(classes.toogleButton, classes.icon)}
              color="inherit"
              onClick={() => dispatch(TOOGLEOPEN())}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography className={classes.title}>
            Improve-in Challenge
          </Typography>
          <IconButton
            className={classes.icon}
            edge="start"
            style={{ color: "white" }}
            onClick={() => dispatch(LOG_OUT())}
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    backgroundColor: "#2b2b2a",
    width: "100%",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
  },
  icon: {
    marginRight: "5%",
    marginLeft: "5%",
  },
  toogleButton: {
    "@media(maxWidth: 600px)": {
      display: "none",
    },
  },
  title: { marginLeft: 30 },
}));
