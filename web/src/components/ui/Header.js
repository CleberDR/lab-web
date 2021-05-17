import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typografy from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from "@material-ui/styles";


import logo from '../../assets/uneb.png';
import logo2 from '../../assets/si.png';
import { Button } from '@material-ui/core';

function ElevationScroll(props) {
    const { children } = props;
 
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme=>({
  toolbarMargin:{
    ...theme.mixins.toolbar,
    marginBottom: "1em"
  },
  logo:{
    height:"5em",
    marginLeft:"auto" 
  },
  logo2:{
    height:"5em",
    marginLeft: 10    
  },
  drawerIconContaner:{
    "&:hover":{
      backgroundColor: "transparent"
    }
  }
})) 

export default function Header(props){
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableRipple disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose ={()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)}>
      Exemple
      </SwipeableDrawer >
      <IconButton className ={classes.drawerIconContaner}  onClick={()=> setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
  
    return(
      <React.Fragment>
        <ElevationScroll>
            <AppBar position ="fixed" color="primary">
                <ToolBar>
                <div>
                  <Typografy variant="h5">
                    Sistema de Avaliação Institucional                    
                  </Typografy>                  
                  <Typografy variant="subtitle1">
                   Colegiado de Sistemas de Informação - UNEB                    
                  </Typografy> 
                  </div>
                  <Button disableRipple>
                    {drawer}
                  </Button>
                  <img alt="uneb"  className={classes.logo} src={logo} />
                  <img alt="csi"  className={classes.logo2} src={logo2} />                                
                </ToolBar>                
            </AppBar>
        </ElevationScroll>
        <div className = {classes.toolbarMargin} />     
      </React.Fragment> 
    )
}