import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/header";
import Movie from "./component/movie";
import Search from "./component/search";
import Edit from "./component/Edit";
import Todo from "./component/Todo";



const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours


const App = () => {
  
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);
  

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
                         
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
      
  	};

    const [todos,setTodos]=useState([
    
     
    ]);
  
    const addTodo =text=>{
      const newTodo=[...todos,{text}]
      setTodos(newTodo)
    }
    return (
      <div className="App">
        
       
      <Header text="GOFLIX" />
      <Search search={search} />
      
      <Edit addTodo={addTodo}/>
     <center> <p className="App-intro">
Movies move us like nothing else can, whether they’re scary, funny,
 dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
          </center>
      <div className="movies">
      {todos.map(todo=>
     <Todo todo={todo}/>
     )}
          {movies.map((movie, index) => (
            <Movie  key={`${index}-${movie.Title}`} movie={movie} />
          ))
        }
        
      </div>
      </div>
  );
};


export default App;