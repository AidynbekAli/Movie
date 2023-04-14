import { MovieForm } from "../newMovie/MovieForm";
import { Button } from "../UI/Button";
import { useState } from "react";
import "./Header.css";

export const Header = ({ onSubmit }) => {
  const [toggler, setToggler] = useState(false);

  const openMovie = () => {
    setToggler(!toggler);
    console.log(toggler);
  };

  return (
    <div className="header">
      <div className="header_text">
        <b>Favorite Movies</b>
        {toggler ? (
          <MovieForm onClick={openMovie} onSubmit={onSubmit} />
        ) : (
          <Button  onClick={openMovie}>ADD MOVIE</Button>
        )}
      </div>
    </div>
  );
};
