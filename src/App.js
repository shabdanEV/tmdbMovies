import './App.scss';
import './styles/style.scss'
import Header from "./components/header/header";
import Home from "./page/home/home";
import {Routes, Route} from "react-router-dom";
import Popular from './page/popular/popular'
import {useState} from "react";
import Search from "./page/Search/search";
import TopRated from "./page/pageTop/topRated";
import DetailPage from "./page/DetailPage/DetailPage";
import DetailActors from "./page/DetailActors/detailActors";


function App() {
    const [mode,setMode] = useState(JSON.parse(localStorage.getItem("mode")))
    const handleMode = (mode) => {
        setMode(!mode)
        localStorage.setItem("mode" , JSON.stringify(!mode))
    }
  return (
      <div className="App" style={{
          background: mode ? "black" : "white",
          color: mode ? "white" : "#000000"
      }}>
          <Header handleMode={handleMode} setMode={setMode} mode={mode}/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/popular'} element={<Popular/>}/>
              <Route path={'/top-rated'} element={<TopRated/>}/>
=              <Route path={'/detail/:movieName'} element={<Search/>}/>
              <Route path={'/movies/movie/:movieId'} element={<DetailPage/>}/>
              <Route path={'/movies/credits-cast/:castId'} element={<DetailActors/>}/>
          </Routes>

      </div>
  );
}

export default App;
