import './App.css';
import Header from "./components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Advertisement from "./components/Advertisement"
import FeaturedOverlay from "./components/FeaturedOverlay"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="main-content">
          <Advertisement/>
          <FeaturedOverlay/>
          <div>More stuff to add but starting w this first</div>
      </div>
      <footer>
        <div>A footer is here</div>
      </footer>
    </div>
  );
}

export default App;
