import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolBar: {
      paddingRight: 24,
    },
    toolBarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
    },
    title: {
      flexGrow: 1,
    },
  })
);

const GenericTemplate = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <IconButton edge="start" color="inherit" area-label="open drawer">
            <MenuIcon />
          </IconButton>
          {/*
            component h1
            variant h6
            h1タグにh6のstyleをあてている
          */}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            管理画面
          </Typography>
        </Toolbar>
      </AppBar>
      <main>{props.title}</main>
    </div>
  );
};

GenericTemplate.propTypes = {
  title: PropTypes.string,
};

export default GenericTemplate;
