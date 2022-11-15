
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Beers from './Pages/Beers'
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer'
import SingleBeer from './Pages/SingleBeer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/beers'} element={<Beers/>} />
        <Route path={'/random-beer'} element={<RandomBeer/>} />
        <Route path={'/new-beer'} element={<NewBeer/>} />
        <Route path={'/:id'} element={<SingleBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
