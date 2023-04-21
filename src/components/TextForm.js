import { useState } from "react";
import Button from "./Button";

function TextForm(props) {
  const [text, setText] = useState("");
  const [minsToRead, setMinsToRead] = useState("0 Second");

  const handleUppercaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.toggleAlert("success", "Text converted to upper case!");
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.toggleAlert("success", "Text converted to lower case!");
  };

  const handleClearClick = () => {
    setText("");
    setMinsToRead("0 Second");
    props.toggleAlert("success", "Text has been cleared!");
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
    props.toggleAlert("success", "Text copied to clipboard!");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log(text, e.target.value);
    let time = text.split(" ").length * 0.008;
    if (time < 1) {
      let mins_to_read = (time * 60).toString() + " Second";
      setMinsToRead(mins_to_read);
    } else {
      let mins_to_read = Math.round(time).toString() + " Minute";
      setMinsToRead(mins_to_read);
    }
  };

  //why this is running undefined infinitely in console? props.toggleAlert("success", "hemlo");

  return (
    <div className="container px-4">
      <h1>
        <b>Text To Analyze:</b>
      </h1>
      <div className="form-group">
        <textarea
          className={`form-control bg-${
            props.mode === "dark" ? "dark" : "light"
          } text-${props.mode === "dark" ? "light" : "dark"}`}
          rows="8"
          id="textBox"
          onChange={handleOnChange}
          placeholder="Enter text here..."
          value={text}
        ></textarea>
        <label htmlFor="">
          (
          {text.length > 0
            ? text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            : "0"}{" "}
          Words, {text.length} Characters, {minsToRead} Read)
        </label>
        <br />
        <Button
          style="primary"
          click={handleUppercaseClick}
          text="Convert To Uppercase"
          disabled={text.length === 0 ? true : false}
        />
        <Button
          style="warning"
          click={handleLowercaseClick}
          text="Convert To Lowercase"
          disabled={text.length === 0 ? true : false}
        />
        <Button
          style="success"
          click={handleSpeechClick}
          text="Convert To Speech"
          disabled={text.length === 0 ? true : false}
        />
        <Button
          style="info"
          click={handleCopyClick}
          text="Copy Text"
          disabled={text.length === 0 ? true : false}
        />
        <Button
          style="danger"
          click={handleClearClick}
          text="Clear"
          disabled={text.length === 0 ? true : false}
        />
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
