export const drawerOpenWidth = 260;

export const drawerCloseWidth = 80;

export const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const layoutStyle = (theme) => ({
  root : {
    display : 'flex'
  },
  mainPanel: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar
});

export default layoutStyle;