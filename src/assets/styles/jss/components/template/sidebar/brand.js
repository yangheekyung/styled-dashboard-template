const brandStyle = (theme) => ({
  root : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar
  }
});

export default brandStyle;