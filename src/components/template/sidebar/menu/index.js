import React, {useState} from 'react';
import {TreeView} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";
import {ArrowDropDown, ArrowDropUp} from "@material-ui/icons";
import { Scrollbars } from 'react-custom-scrollbars';
import MenuItem from "./menuItem";

import style from '../../../../assets/styles/jss/components/template/sidebar/menu';

const useStyles = makeStyles(style);

const Index = ({routes}) => {
  const classes = useStyles();
  const [expended, setExpended] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpended(nodeIds);
  }
  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  }

  const renderItem = (nodes, parentIndex=0) => (
    nodes.map(({icon, title, children}, childrenIndex) => {
      const key = (parentIndex *10) + (childrenIndex + 1);
      return (
        <MenuItem
          key={`${key}`}
          nodeId={`${key}`}
          icon={icon}
          label={title}
        >
          {Array.isArray(children) ? renderItem(children, key) : null}
        </MenuItem>
      )
    })
  )

  return (
    <Scrollbars>
      <TreeView
        expanded={expended}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        defaultCollapseIcon={<ArrowDropUp/>}
        defaultExpandIcon={<ArrowDropDown/>}
        classes={{
          root : classes.root
        }}
      >
        {renderItem(routes)}
      </TreeView>
    </Scrollbars>
  )
}

export default Index;