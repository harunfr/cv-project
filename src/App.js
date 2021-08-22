import React, { Component } from "react";
import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";
import Technical from "./components/Technical";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { input: "", output: "" },
      age: { input: "", output: "" },
      year: { input: "", output: "" },
      short: { input: "", output: "" },
      school: { input: "", output: "" },
      department: { input: "", output: "" },
      stack: { input: "", output: "" },
      libraries: { input: "", output: "" },
      frameworks: { input: "", output: "" },
      projects: { input: "", output: "" },
      github: { input: "", output: "" },

      personalsite: { input: "", output: "" },
      misc: { input: "", output: "" },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(infoName, e) {
    e.preventDefault();
    this.setState((prevState) => {
      if (prevState[infoName].output) {
        return {
          [infoName]: { input: prevState[infoName].output, output: "" },
        };
      } else if (prevState[infoName].input) {
        return {
          [infoName]: { input: "", output: prevState[infoName].input },
        };
      }
    });
  }

  onChange(infoName, e) {
    this.setState((prevState) => {
      return {
        [infoName]: { input: e.target.value, output: "" },
      };
    });
  }

  render() {
    return (
      <div className="App">
        <General
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          //
          infoNameForName="name"
          submittedValueForName={this.state.name.output}
          valueOfInputForName={this.state.name.output || this.state.name.input}
          //
          infoNameForAge="age"
          submittedValueForAge={this.state.age.output}
          valueOfInputForAge={this.state.age.output || this.state.age.input}
          //
          infoNameForShort="short"
          submittedValueForShort={this.state.short.output}
          valueOfInputForShort={
            this.state.short.output || this.state.short.input
          }
        />
        <Education
          //
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          infoNameForSchool="school"
          submittedValueForSchool={this.state.school.output}
          valueOfInputForSchool={
            this.state.school.output || this.state.school.input
          }
          //
          infoNameForDepartment="department"
          submittedValueForDepartment={this.state.department.output}
          valueOfInputForDepartment={
            this.state.department.output || this.state.department.input
          }
          //
          infoNameForYear="year"
          submittedValueForYear={this.state.year.output}
          valueOfInputForYear={this.state.year.output || this.state.year.input}
        />
        <Technical
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          //
          infoNameForStack="stack"
          submittedValueForStack={this.state.stack.output}
          valueOfInputForStack={
            this.state.stack.output || this.state.stack.input
          }
          //
          infoNameForLibraries="libraries"
          submittedValueForLibraries={this.state.libraries.output}
          valueOfInputForLibraries={
            this.state.libraries.output || this.state.libraries.input
          }
          //
          infoNameForFrameworks="frameworks"
          submittedValueForFrameworks={this.state.frameworks.output}
          valueOfInputForFrameworks={
            this.state.frameworks.output || this.state.frameworks.input
          }
          //
          infoNameForProjects="projects"
          submittedValueForProjects={this.state.projects.output}
          valueOfInputForProjects={
            this.state.projects.output || this.state.projects.input
          }
          //
          infoNameForGithub="github"
          submittedValueForGithub={this.state.github.output}
          valueOfInputForGithub={
            this.state.github.output || this.state.github.input
          }
          //
          infoNameForPersonalSite="personalsite"
          submittedValueForPersonalSite={this.state.personalsite.output}
          valueOfInputForPersonalSite={
            this.state.personalsite.output || this.state.personalsite.input
          }
          //
          infoNameForPersonalMisc="misc"
          submittedValueForPersonalMisc={this.state.misc.output}
          valueOfInputForPersonalMisc={
            this.state.misc.output || this.state.misc.input
          }
        />
      </div>
    );
  }
}
