import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import React from 'react';
// import LandingPage from './components/LandingPage';
// import DisplayMovieList from "./components/DisplayMovieList";
// import MoviePage from "./components/MoviePage"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Advertisement from "./components/Advertisement"
// import FeaturedOverlay from "./components/FeaturedOverlay"

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        movieDataArr: null,
        clickedItem: null,
    }
  }


getAllMovieData = (data) => {
    this.setState({
        movieDataArr: [...data]
    })
}

getClickedItem = (data) => {
    this.setState({
      clickedItem: data
    })
}


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Header getData={this.getAllMovieData} />
        </header>
        <div className="main-content">
              <Main movieData={this.state.movieDataArr} getClickedItem={this.getClickedItem} clickedItem={this.state.clickedItem}/>
        </div>
      </div>
    );
  }
}

export default App;
