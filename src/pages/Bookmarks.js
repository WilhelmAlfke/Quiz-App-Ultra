import Card from "../Card/Card.js";

export default function Bookmarks({ cardArray }) {
  return (
    <ul>
      {cardArray.map(
        (card) =>
          card.isBookmarked && (
            <Card
              key={card.id}
              question={card.question}
              answer={card.answer}
              tags={card.tags}
              isBookmarked={card.isBookmarked}
            />
          )
      )}
    </ul>
  );
}
