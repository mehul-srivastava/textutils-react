import { useState } from "react";

function TextForm(props) {
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
    setMinsToRead("0 Second");
  };

  const handleSpeechClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("textBox");
    text.select();
    document.execCommand("copy");
    alert("Text Copied!");
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
    <div className="container my-3 p-4">
      <h1>
        <b>Text To Analyze:</b>
      </h1>
      <div className="form-group">
        <textarea
          className={`form-control bg-${
            props.mode == "dark" ? "dark" : "light"
          } text-${props.mode == "dark" ? "light" : "dark"}`}
          rows="8"
          id="textBox"
          onChange={handleOnChange}
          placeholder="Enter text here..."
          value={text}
        ></textarea>
        <label htmlFor="">
          ({text.length > 0 ? text.split(" ").length : "0"} Words, {text.length}{" "}
          Characters, {minsToRead} Read)
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
        <button
          className="btn btn-success my-3 mx-1"
          onClick={handleSpeechClick}
        >
          Convert To Speech
        </button>
        <button className="btn btn-info my-3 mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-danger my-3 mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <h1 className="mt-5">Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter text in the text box above to preview it here"}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
