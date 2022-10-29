import Navigation from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import { useEffect, useState } from "react";
import Home from "./pages/Home.js";
import Bookmarks from "./pages/Bookmarks.js";
import About from "./pages/About.js";
import AddCard from "./pages/AddCard.js";

const cardArray = [
  {
    id: 1,
    question: "frage1",
    answer: "antwort1",
    tag: ["erster", "zweiter", "dritter"],
    isBookmarked: true,
  },
  {
    id: 2,
    question: "frage2",
    answer: "antwort2",
    tag: ["erster", "zweiter", "dritter"],
    isBookmarked: false,
  },
  {
    id: 3,
    question: "frage3",
    answer: "antwort3",
    tag: ["erster", "zweiter", "dritter"],
    isBookmarked: false,
  },
];

function App() {
  const [currentPage, navigateTo] = useState("home");
  const [cards, setCards] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("gespeicherteCardList") ?? cardArray
      );
    } catch (error) {
      console.warn(error);
      return cardArray;
    }
  });

  useEffect(() => {
    localStorage.setItem("gespeicherteCardList", JSON.stringify(cards));
  }, [cards]);

  function toggleBookmark(cardId) {
    setCards((cards) => {
      const neuerWert = cards.map((card) => {
        if (card.question === cardId) {
          return { ...card, isBookmarked: !card.isBookmarked };
        } else {
          return card;
        }
      });
      return neuerWert;
    });
  }

  function appendCard(question, answer, tags) {
    setCards((alterWert) => {
      const neuerWert = [
        ...alterWert,
        { question, answer, tag: [tags], isBookmarked: true, id: 3424 },
      ];
      return neuerWert;
    });
  }

  function deleteCard(cardId) {
    console.log("test");
    setCards((cards) => {
      const neuerWert = cards.filter((card) => card.question !== cardId);
      return neuerWert;
    });
  }

  return (
    <div className="App">
      <Header />
      <main className="card-list">
        {currentPage === "home" && (
          <Home
            cardArray={cards}
            toggleBookmark={toggleBookmark}
            deleteCard={deleteCard}
          />
        )}
        {currentPage === "bookmark" && (
          <Bookmarks
            cardArray={cards}
            toggleBookmark={toggleBookmark}
            deleteCard={deleteCard}
          />
        )}

        {currentPage === "add__card" && (
          <AddCard appendCards={appendCard} setPage={navigateTo} />
        )}
        {currentPage === "about" && <About />}
      </main>
      <Navigation page={currentPage} setPage={navigateTo} />
    </div>
  );
}

export default App;
