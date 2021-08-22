import React from "react";
import InputForm from "./InputForm";
import "../styles/Education.css";
export default function Education(props) {
  return (
    <div>
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForSchool}
        submittedValue={props.submittedValueForSchool}
        valueOfInput={props.valueOfInputForSchool}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForDepartment}
        submittedValue={props.submittedValueForDepartment}
        valueOfInput={props.valueOfInputForDepartment}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForYear}
        submittedValue={props.submittedValueForYear}
        valueOfInput={props.valueOfInputForYear}
      />
      {/* 
      <InputForm department />
      <InputForm grad year />
      <InputForm /> */}
    </div>
  );
}
