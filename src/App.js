import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailedCard from "./components/DetailedCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character/";

  const fetchApi = () => {
    return fetch(url).then((response) => {
      return response.json();
    });
  };

  const loadCharacters = () => {
    fetchApi().then((data) => {
      const newCharacters = data.results.map((character) => {
        const newCharacter = { ...character, isFavourite: false };
        return newCharacter;
      });
      setCharacters(newCharacters);
    });
  };

  function toggleFavouriteStatus(id) {
    const favouriteCharacters = characters.map((character) => {
      const favouriteCharacter = { ...character };
      if (character.id === id) {
        favouriteCharacter.isFavourite = !favouriteCharacter.isFavourite;
      }
      return favouriteCharacter;
    });
    setCharacters(favouriteCharacters);
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Card characters={characters} />} />
        <Route
          path="/character/:id"
          element={
            <DetailedCard
              characters={characters}
              toggleFavouriteStatus={toggleFavouriteStatus}
            />
          }
        />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
