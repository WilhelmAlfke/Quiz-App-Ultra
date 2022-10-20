import Card from "./Card/Card.js";
import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />

      <ul className="card-list">
        <Card
          question="In the Kingdom Heart series who provides the english voice for Master Eraqus?"
          answer="HUHU"
          tag_1="WIWI"
          tag_2="WAW"
          tag_3="WOW"
        />
        <Card
          question="Lorem didorium?"
          answer="HAHAH"
          tag_1="WAMBA"
          tag_2="MUMPS"
          tag_3="MASERN"
        />
      </ul>

      <Navigation />
    </div>
  );
}

export default App;
