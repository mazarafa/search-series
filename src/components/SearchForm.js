import React,{ Component } from 'react';
import './../App.css';

const  API_KEY='e6410ead'

export class SearchForm extends Component{
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        //alert(this.state.inputMovie)
        const { inputMovie } = this.state
    
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
          .then(res => res.json())
          .then(results => {
            //console.log(results)
            const { Search = [], totalResults = "0" } = results
            console.log({ Search, totalResults })
            this.props.onResults(Search)
        })
    }

    render(){
        return (
            <form className="formulario-center " onSubmit={this._handleSubmit}>
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    onChange={this._handleChange}
                    type="text"
                    placeholder="search..." />
                </div>
                <div className="control">
                  <button className="button is-info">
                    Search
                  </button>
                </div>
              </div>
            </form>
        )
    }
}