import {transition} from '../layout/index';

const headerStyle = (theme) => ({
  appBar: {
    ...transition,
    color: '#555',
    boxShadow: theme.shadows[0],
  },
  sidebarButton: {
    color: '#999',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows["1"],
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows["6"],
    }
  },
  pageName: {
    padding: '10px 30px',
    fontWeight: theme.typography.fontWeightLight
  }
});

export default headerStyle;