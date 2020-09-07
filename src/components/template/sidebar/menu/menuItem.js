import React from 'react';
import {TreeItem} from "@material-ui/lab";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import style from '../../../../assets/styles/jss/components/template/sidebar/menu/menuItem';

const useStyles = makeStyles(style);

const MenuItem = ({nodeId, icon, label, children}) => {
  const classes = useStyles();

  return (
    <TreeItem
      nodeId={nodeId}
      label={
        <ListItem component={"div"}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      }
      classes={{
        content: classes.content
      }}
    >
      {children}
    </TreeItem>
  )
}

export default MenuItem;