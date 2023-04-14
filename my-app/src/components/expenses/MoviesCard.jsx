// import "./MoviesCard.css"
export const MoviesCard = ({ title, img, rating }) => {
//   const {date}= el;
  return (
    <li class="movie-element">
        <div class="movie-element-image">
          <img src= {img} alt=''/>
        </div>
        <div class="movie-element-info">
          <h2>{title}</h2>
          <div>
          <p> {rating}/5 stars</p>
          {/* <Button width="130px" marginLeft="40px"  backgroundColor="rgb(119, 0, 0"  height='40px' color='white'> */}
            Delete
          {/* </Button> */}
          {/* <Button width="100px" marginLeft="40px" backgroundColor="rgb(8, 8, 92)" borderRadius='25px' height='40px' color='white'> */}
            Edit
          {/* </Button> */}
          </div>
          
        </div>
      </li>
  );
};
