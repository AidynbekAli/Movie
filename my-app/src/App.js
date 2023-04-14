import { Header } from "./components/header/Header";
import { Movies } from "./components/expenses/Movies";
import "./App.css";
import { useState } from "react";

function App() {
  const [newMovie, setNewProduct] = useState([]);

  const addNewMoviesHandler = (data) => {
    setNewProduct([...newMovie, data]);
  };
  
  console.log(newMovie);
  return (
    <div className="App">
      <Header onClick={addNewMoviesHandler} />
      <Movies data={newMovie} />
    </div>
  );
}

export default App;
