import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import style from '../../../../assets/styles/jss/components/template/sidebar/brand';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(style);

const Index = ({title, logo}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        {logo}
      </div>
      <Typography variant={"subtitle1"}>{title}</Typography>
    </div>
  )
}

export default Index;