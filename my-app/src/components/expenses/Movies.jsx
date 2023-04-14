import { MoviesCard } from "./MoviesCard";

export const Movies = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((el) => {
        return <MoviesCard el={el} />;
      })}
    </div>
  );
};
