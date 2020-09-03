import React from 'react';
import {TreeItem} from "@material-ui/lab";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const MenuItem = ({nodeId, icon, label, children}) => {
  return (
    <TreeItem
      nodeId={nodeId}
      // icon={icon}
      label={
        <ListItem>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
        // label
      }
    >
      {children}
    </TreeItem>
  )
}

export default MenuItem;