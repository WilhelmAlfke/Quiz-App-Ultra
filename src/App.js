import Card from "./Card/Card.js";
import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import Button from "./Button/Button.js";

function App() {
  return (
    <div className="App">
      <Header />

      <ul className="card-list">
        <Card />
      </ul>

      <Navigation />
    </div>
  );
}

export default App;
