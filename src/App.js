import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React and Morty</h1>
      </header>
      <section class="card">
        <img
          class=""
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty Smith"
        />
        <p>Morty Smith</p>
      </section>
      <nav>
        <ul>
          <li>
          <span class="dot"></span>
          </li>

          <li>
          <span class="dot"></span>
          </li>

          <li>
          <span class="dot"></span>
          </li>

          <li>
          <span class="dot"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
