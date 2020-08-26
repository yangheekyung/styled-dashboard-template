import {drawerOpenWidth, drawerCloseWidth, transition} from '../layout/index';

const headerStyle = (theme) => ({
  appBar: {
    ...transition,
    boxShadow: theme.shadows[0]
  },
  appBarOpen: {
    marginLeft: drawerOpenWidth,
    width: `calc(100% - ${drawerOpenWidth}px)`
  },
  appBarClose: {
    marginLeft: drawerCloseWidth,
    width: `calc(100% - ${drawerCloseWidth}px)`
  },
  sidebarButton: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows["1"],
    '&:hover' : {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows["14"]
    }
  }
});

export default headerStyle;