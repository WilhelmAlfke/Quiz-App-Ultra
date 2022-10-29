import "./Card.css";
import Button from "../Button/Button.js";

export default function Card({
  cardId,
  question,
  answer,
  tags,
  isBookmarked,
  toggleBookmark,
  deleteCard,
}) {
  return (
    <li className="card-list__item">
      <article className="card" data-js="card">
        <h2 className="card__question">{question}</h2>
        <Button answer={answer} />

        <ul className="card__tag-list" data-js="card__tag-list">
          {tags.map((tagNumber) => (
            <li key={tagNumber} className="card__tag-list-item">
              {tagNumber}
            </li>
          ))}
        </ul>
        <div className="card__button-bookmark">
          <button
            data-js="button__bookmark"
            className={
              isBookmarked
                ? "bookmark--active bookmark"
                : "bookmark:hover bookmark"
            }
            aria-label="bookmark"
            type="button"
            onClick={() => {
              toggleBookmark(cardId);
            }}
          >
            <svg
              className="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            deleteCard(cardId);
          }}
        >
          delete
        </button>
      </article>
    </li>
  );
}
