const brandStyle = (theme) => ({
  root : {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: theme.spacing(2),
    ...theme.mixins.toolbar
  },
  logo : {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
  }
});

export default brandStyle;