import React from "react";
import InputForm from "./InputForm";
import "../styles/Technical.css";
export default function Technical(props) {
  return (
    <div>
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForStack}
        submittedValue={props.submittedValueForStack}
        valueOfInput={props.valueOfInputForStack}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForLibraries}
        submittedValue={props.submittedValueForLibraries}
        valueOfInput={props.valueOfInputForLibraries}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForFrameworks}
        submittedValue={props.submittedValueForFrameworks}
        valueOfInput={props.valueOfInputForFrameworks}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForProjects}
        submittedValue={props.submittedValueForProjects}
        valueOfInput={props.valueOfInputForProjects}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForGithub}
        submittedValue={props.submittedValueForGithub}
        valueOfInput={props.valueOfInputForGithub}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForPersonalSite}
        submittedValue={props.submittedValueForPersonalSite}
        valueOfInput={props.valueOfInputForPersonalSite}
      />
      <InputForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        infoName={props.infoNameForPersonalMisc}
        submittedValue={props.submittedValueForPersonalMisc}
        valueOfInput={props.valueOfInputForPersonalMisc}
      />
    </div>
  );
}
