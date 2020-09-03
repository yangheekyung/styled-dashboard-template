import React, {useState} from 'react';
import {TreeView} from "@material-ui/lab";
import {ArrowDropDown, ArrowDropUp} from "@material-ui/icons";
import MenuItem from "./menuItem";



const Index = ({routes}) => {
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
    <TreeView
      expanded={expended}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      defaultCollapseIcon={<ArrowDropUp/>}
      defaultExpandIcon={<ArrowDropDown/>}
    >
      {renderItem(routes)}
    </TreeView>
  )
}

export default Index;