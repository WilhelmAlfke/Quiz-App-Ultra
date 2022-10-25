import "./addCard.css";

export default function AddCard({ setPage, appendCards }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    appendCards(data.inputQuestion, data.inputAnswer, data.inputTags);
    setPage("home");
  }
  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputQuestion" aria-labelledby="inputForQuestion">
          <input
            name="inputQuestion"
            id="inputQuestion"
            type="text"
            placeholder="Question"
          ></input>
        </label>
        <label htmlFor="inputAnswer" aria-labelledby="inputForAnswer">
          <input
            name="inputAnswer"
            id="inputAnswer"
            type="text"
            placeholder="Answer"
          ></input>
        </label>
        <label htmlFor="inputTags" aria-labelledby="inputFortags">
          <input
            name="inputTags"
            id="inputTags"
            type="text"
            placeholder="Tags"
          ></input>
        </label>
        <button className="submitButton" type="Submit">
          Create New Card
        </button>
      </form>
    </fieldset>
  );
}
