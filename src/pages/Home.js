import Card from "../Card/Card.js";

export default function Home({ cards }) {
  return (
    <ul>
      {cards.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          answer={card.answer}
          tags={card.tags}
          isBookmarked={card.isBookmarked}
        />
      ))}
    </ul>
  );
}
