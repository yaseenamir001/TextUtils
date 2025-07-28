import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mb-3 text-nowrap mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mb-3 text-nowrap mx-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <h3 className="mt-5">Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
