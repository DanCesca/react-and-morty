import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function App() {
  const url = "https://rickandmortyapi.com/api/character/";

  const fetchApi = () => {
    return fetch(url).then((response) => {
      return response.json();
    });
  };

  return (
    <div className="App">
      <Header />
      <Card fetchApi={fetchApi} />
      <NavBar />
    </div>
  );
}

export default App;
