import React,{ Component } from 'react';
import {  Title} from "./components/Title";
import { SearchForm} from "./components/SearchForm";
import { SearchList} from "./components/SearchList";

import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  state = { results:[]}

  _handleResults = (results) => {
    this.setState({results})
  }

  /*   _renderResults(){
      const{ results} = this.state
      return results.map(movie =>{
        return(

          <Movie 
            key={movie.imdbID}
            title = {movie.Title}
            year = {movie.Year}
            poster = {movie.Poster}
          />
        )
      })
  } */
  
  render(){
    return (
      <div className="App">
        <Title>NETFLIX</Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>
        
        { this.state.results.length === 0 
          ? <p>Sin resultados</p>
          //: this._renderResults()
          :<SearchList movies = {this.state.results}/>
        }
       
      </div>
    );
  }
}

export default App;
