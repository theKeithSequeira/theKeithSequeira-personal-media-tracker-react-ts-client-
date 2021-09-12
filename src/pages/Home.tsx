import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MovieIcon from "@material-ui/icons/Movie";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import LibraryMusicSharpIcon from "@material-ui/icons/LibraryMusicSharp";
import { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Movies from "./movies/Movies";
import TVShows from "./TVShows";
import Podcasts from "./Podcasts";
import Footer from "../components/Footer";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    listItem: {
      display: "flex",
    },
  })
);

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Welcome To Media Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {/*/ Movies*/}
            <ListItem
              className={classes.listItem}
              button
              selected={selectedIndex === 0}
              onClick={(event) => {
                handleListItemClick(event, 0);
              }}
            >
              <Link to="/movies">
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Movies" />
              </Link>
            </ListItem>
            {/*/ TV Shows*/}
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => {
                handleListItemClick(event, 1);
              }}
            >
              <Link to="/tv-shows">
                <ListItemIcon>
                  <LiveTvIcon />
                </ListItemIcon>
                <ListItemText primary="TV Shows" />
              </Link>
            </ListItem>
            {/*/ Podcasts*/}
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => {
                handleListItemClick(event, 2);
              }}
            >
              <Link to="/podcasts">
                <ListItemIcon>
                  <LibraryMusicSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Podcasts" />
              </Link>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/tv-shows">
              <TVShows />
            </Route>
            <Route exact path="/podcasts">
              <Podcasts />
            </Route>
            <Route path="/">
              <Footer />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
