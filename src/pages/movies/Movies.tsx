import { Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
    },
    iconButton: {
      padding: 10,
    },
  })
);

const fetchMovies = async (movieString: string) => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1&include_adult=true&query=${movieString}`;

  if (movieString) {
    const response = await fetch(searchUrl);
    const result = await response.json();
    console.log(result);
  }
};

const Movies = () => {
  const classes = useStyles();
  const [movieString, setMovieString] = useState("");
  return (
    <>
      <form>
        <TextField
          label="Search Movies"
          variant="outlined"
          value={movieString}
          onChange={(event) => {
            setMovieString(event.currentTarget.value);
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={() => fetchMovies(movieString)}
        >
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
};

export default Movies;
