import React from 'react';
import{ AppBar,Toolbar,IconButton, Typography,InputBase,Badge, Grid, } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';

// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
// import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert'
// import { makeStyles } from '@material-ui/styles';
// import DisplayDate from './DisplayDate';
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
   toolbar:{
    justifyContent: 'center',
   },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}));


 function TopBar(props) {
  const classes = useStyles()
  return(

      <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className= {classes.toolbar} >
          <Grid item>
          <Typography className={classes.title} variant="h6" noWrap>
            Food
          </Typography>
          </Grid>
          <Grid item>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search food"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Grid>
          <Grid item>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
           </IconButton>
          </div>
          </Grid>
          <div> </div>
        </Toolbar>
      </AppBar>
      </div>
    );
 }
export default TopBar;

