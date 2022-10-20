import "./Button.css";
import { useState } from "react";
const initialState = true;


export default function Button() {
  const [state, setState] = useState(initialState);
  return (
    <button onClick={() => {
                setState((currentState) => {
                  const newState = !currentState;
                  return newState;
                }); className={{state ? "card__answer" : "card__answer--active"}}
      type="button"
      data-js="answer-button"
    >Show answer
    </button>
  );
}
