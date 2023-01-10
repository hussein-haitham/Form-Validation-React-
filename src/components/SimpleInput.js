import { useState, useRef } from "react";

//! Make a custom hook for input section

const SimpleInput = (props) => {
  const [nameState, setNameState] = useState({ input: "", isValid: true });

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameState.input.trim() === "") {
      setNameState({ ...nameState, isValid: false });
    }
  };
  const nameChangeHandler = (event) => {
    setNameState({ input: event.target.value, isValid: true });
  };
  const nameBlurHandle = (event) => {
    if (nameState.input === "") setNameState({ ...nameState, isValid: false });
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={nameState.isValid ? "form-control" : "form-control invalid"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandle}
          onChange={nameChangeHandler}
          type="text"
          id="name"
        />
        {!nameState.isValid && (
          <p className="error-text">Please enter a name</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
