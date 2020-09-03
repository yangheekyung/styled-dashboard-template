import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import style from '../../../assets/styles/jss/components/template/sidebar/brand';
import {SvgIcon, Typography} from "@material-ui/core";
import Logo from "../../common/logo";

const useStyles = makeStyles(style);

const Brand = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo
        viewBox="0 0 268.95 291.32"
        htmlColor="white"
      />
      <Typography variant={"subtitle1"}>SOCIAL BOX</Typography>
    </div>
  )
}

export default Brand;