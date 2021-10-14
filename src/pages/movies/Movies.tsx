import { Container, Grid, Paper, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

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

interface MoviesSearchResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: string;
  vote_count: number;
}

/* const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "posterPath", headerName: "Poster", type: "image", width: 500 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "language",
    headerName: "Language",
    width: 150,
    editable: true,
  },
  {
    field: "releaseDate",
    headerName: "Release Date",
    type: "number",
    width: 110,
    editable: true,
  },
]; */

// var rows = [];

const fetchMovies = async (movieString: string) => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=true&query=${movieString}`;

  var testId;
  if (movieString) {
    const response = await fetch(searchUrl);
    const result = await response.json();
    console.log(result);
    console.log(result.results[0].id);
    testId = result.results[0].id;

    for (let index = 0; index < result.results.length; index++) {}

    // search;
    const movieDetailsUrl = ` https://api.themoviedb.org/3/movie/${testId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

    if (testId) {
      const newResponse = await fetch(movieDetailsUrl);
      const newResult = await newResponse.json();
      console.log(newResult);
    }
    return result.results;
  }
  return [];
};
var searchResults = [];
const handleSearch = async (event: React.MouseEvent, movieString: string) => {
  event.preventDefault();
  const fetchedSearchResults = await fetchMovies(movieString);
  searchResults = fetchedSearchResults;
  return fetchedSearchResults;
};

const Movies = () => {
  const classes = useStyles();
  const [movieString, setMovieString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
          onClick={(event) => handleSearch(event, movieString)}
        >
          <SearchIcon />
        </IconButton>
      </form>
      <Container maxWidth="lg">
        <Paper elevation={2}>
          <Grid />
        </Paper>
      </Container>
    </>
  );
};

export default Movies;
