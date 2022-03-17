import React from "react";
import { connect } from "react-redux";
import { startEditTest, startRemoveTest } from "../actions/tests";
import BloodTestResultForm from "./BloodTestResultForm";
import LiverFunctionTestResultForm from "./LiverFunctionTestResultForm";

// Edit Test Results Component
export class EditTestPage extends React.Component {
  onSubmit = (test) => {
    this.props.startEditTest(this.props.test.id, test);
    this.props.history.push("/dashboard");
  };
  onRemove = () => {
    this.props.startRemoveTest({ id: this.props.test.id });
    this.props.history.push("/dashboard");
  };

  render() {
    const testType = this.props.test.testType;
    let formType;
    if (testType === "Blood Test") {
      formType = (
        <BloodTestResultForm test={this.props.test} onSubmit={this.onSubmit} />
      );
    } else if (testType === "Liver Function Test") {
      formType = (
        <LiverFunctionTestResultForm
          test={this.props.test}
          onSubmit={this.onSubmit}
        />
      );
    }
    return (
      <main className="edit__page">
        <div className="page-header">
          <h2 className="page-header__title">Edit Blood Test Result</h2>
        </div>
        <div className="content-container">
          {formType}
          <button className="button--secondary" onClick={this.onRemove}>
            <h4>Remove Test</h4>
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    test: state.test.find((test) => test.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditTest: (id, test) => dispatch(startEditTest(id, test)),
  startRemoveTest: (data) => dispatch(startRemoveTest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTestPage);
