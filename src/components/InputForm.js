import React from "react";
import "../styles/InputForm.css";
export default function InputForm(props) {
  return (
    <div className="form">
      <form onSubmit={(e) => props.onSubmit(props.infoName, e)}>
        <label>{props.infoName}</label>
        {!props.submittedValue ? (
          <input
            onChange={(e) => props.onChange(props.infoName, e)}
            type="text"
            value={props.valueOfInput}
          />
        ) : null}
        <div className="submit-value">{props.submittedValue}</div>
        <button type="submit">
          {!props.submittedValue ? "Add" : "Edit"} {props.infoName}
        </button>
      </form>
    </div>
  );
}
