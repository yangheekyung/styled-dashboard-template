import React, {useState} from 'react';
import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import {makeStyles} from "@material-ui/core/styles";
import style from '../../../assets/styles/jss/components/template/layout';

const useStyles = makeStyles(style);

const Layout = ({children}) => {
  const classes = useStyles();

  const [sidebarToggle, setSidebarToggle] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  }

  return (
    <div className={classes.root}>
      <Sidebar
        sidebarToggle={sidebarToggle}
      />
      <Header
        sidebarToggle={sidebarToggle}
        handleSidebarToggle={handleSidebarToggle}
      />
      <div className={classes.mainPanel}>

        <main className={classes.content}>
          <div className={classes.toolbar}/>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;