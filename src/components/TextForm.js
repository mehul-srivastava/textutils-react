import { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");
  const [minsToRead, setMinsToRead] = useState("0 Second");

  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);

    let time = text.split(" ").length * 0.008;
    if (time < 1) {
      let mins_to_read = (time * 60).toString() + " Second";
      setMinsToRead(mins_to_read);
    } else {
      let mins_to_read = Math.round(time).toString() + " Minute";
      setMinsToRead(mins_to_read);
    }
  };

  return (
    <div className="container my-3">
      <h1>Text To Analyze:</h1>
      <div className="form-group">
        <textarea
          className="form-control"
          rows="8"
          onChange={handleOnChange}
          placeholder="Enter text here..."
          value={text}
        ></textarea>
        <label htmlFor="">
          ({text.split(" ").length} Words, {text.length} Characters,{" "}
          {minsToRead} Read)
        </label>
        <br />
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleUppercaseClick}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-warning my-3 mx-1"
          onClick={handleLowercaseClick}
        >
          Convert To Lowercase
        </button>
        <button className="btn btn-danger my-3 mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default TextForm;
