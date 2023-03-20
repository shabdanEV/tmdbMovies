import './App.scss';
import './styles/style.scss'
import Header from "./components/header/header";
import Home from "./page/home/home";
import {Routes, Route} from "react-router-dom";
import Popular from './page/popular/popular'
import {useState} from "react";
import Search from "./page/Search/search";
import TopRated from "./page/pageTop/topRated";
import Series from "./page/TvSeries/Series";
import DetailPage from "./page/DetailPage/DetailPage";


function App() {
    const [mode,setMode] = useState(JSON.parse(localStorage.getItem("mode")))
    const handleMode = (mode) => {
        setMode(!mode)
        localStorage.setItem("mode" , JSON.stringify(!mode))
    }
  return (
      <div className="App" style={{
          background: mode ? "black" : "white",
          color: mode ? "white" : "black"
      }}>
          <Header handleMode={handleMode} setMode={setMode} mode={mode}/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/popular'} element={<Popular/>}/>
              <Route path={'/serial'} element={<Series/>}/>
              <Route path={'/top-rated'} element={<TopRated/>}/>
=              <Route path={'/detail/:movieName'} element={<Search/>}/>
              <Route path={'/movies/movie/:movieId'} element={<DetailPage/>}/>
          </Routes>

      </div>
  );
}

export default App;
