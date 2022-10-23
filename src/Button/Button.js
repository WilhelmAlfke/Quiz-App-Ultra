import "./Button.css";
import { useState } from "react";
const initialState = true;

export default function Button({ answer }) {
  const [state, setState] = useState(initialState);
  return (
    <main>
      <button
        className="card__button-answer"
        type="button"
        onClick={() => {
          setState((currentState) => {
            const newState = !currentState;
            return newState;
          });
          console.log(state);
        }}
      >
        show answer
      </button>
      <p className={state ? "card__answer" : "card__answer--acttive"}>
        {answer}
      </p>
    </main>
  );
}
