import React from "react";
import InputForm from "./InputForm";
import "../styles/General.css";
import avatar from "../styles/avatar.png";
export default function General(props) {
  return (
    <div className="general">
      <img className="avatar" src={avatar} alt="avatar here"></img>
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForName}
        submittedValue={props.submittedValueForName}
        valueOfInput={props.valueOfInputForName}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForAge}
        submittedValue={props.submittedValueForAge}
        valueOfInput={props.valueOfInputForAge}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForShort}
        submittedValue={props.submittedValueForShort}
        valueOfInput={props.valueOfInputForShort}
      />
    </div>
  );
}
