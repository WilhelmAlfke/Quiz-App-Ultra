import Card from "../Card/Card.js";

export default function Bookmarks({ cardArray, toggleBookmark, deleteCard }) {
  console.log(cardArray);
  return (
    <ul>
      {cardArray.map(
        (card) =>
          card.isBookmarked && (
            <Card
              key={card.id}
              question={card.question}
              answer={card.answer}
              tags={card.tag}
              isBookmarked={card.isBookmarked}
              toggleBookmark={toggleBookmark}
              deleteCard={deleteCard}
            />
          )
      )}
    </ul>
  );
}
