import Card from "../Card/Card.js";

export default function Home({ cardArray, toggleBookmark, deleteCard }) {
  console.log(cardArray);
  return (
    <ul>
      {cardArray.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          answer={card.answer}
          tags={card.tag}
          isBookmarked={card.isBookmarked}
          cardId={card.question}
          toggleBookmark={toggleBookmark}
          deleteCard={deleteCard}
        />
      ))}
    </ul>
  );
}
