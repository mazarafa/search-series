import React,{ Component } from 'react';
import {  Title} from "./components/Title";
import { SearchForm} from "./components/SearchForm";
import { SearchList} from "./components/SearchList";



import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  state = { usedSearch: false, results:[]}

  _handleResults = (results) => {
    this.setState({results, usedSearch:true})
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

  _renderResults(){
    // return typeof this.state.results === 'undefined'
    return this.state.results.length === 0 
      ? <p className="erro-text">Sorry! Results not found!</p>
      //: this._renderResults()
      :<SearchList movies = {this.state.results}/>
    

  }
  
  render(){
    return (
      <div className="App">
        <div className="efect-point">
          <div className="title-star">
            <Title>NETFLIX</Title>
          </div>
          <div className="searchForm-wrapper">
            <SearchForm onResults={this._handleResults}/>
          </div>
          
          {/* { this.state.results.length === 0 
            ? <p>Sin resultados</p>
            //: this._renderResults()
            :<SearchList movies = {this.state.results}/>
          } */}
        </div>
        {this.state.usedSearch
            ? this._renderResults()
            : <small className="information-seach">Use The Form to search a movies</small>
        }
       
      </div>
    );
  }
}

export default App;
