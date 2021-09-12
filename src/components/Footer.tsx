import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      width: `calc(100% - ${drawerWidth}px)`,
      textAlign: "end",
    },
  })
);

const Footer = () => {
  return (
    <>
      <footer>
        <Typography variant="subtitle1">
          This App was created with data from
          <a href="https://www.themoviedb.org/">The Movie Database (TMDB)</a>
        </Typography>
        <img src="/tmdb.svg" alt="TMDB logo" width={500} />
      </footer>
    </>
  );
};

export default Footer;
