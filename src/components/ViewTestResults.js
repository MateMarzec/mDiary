import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ViewBloodTestResultForm from "./ViewBloodTestResult";
import ViewLiverFunctionTestResultForm from "./ViewLiverFunctionTestResult";
import { startEditTest, startRemoveTest } from "../actions/tests";

export class ViewTestPage extends React.Component {
  onSave = () => {
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
      formType = <ViewBloodTestResultForm test={this.props.test} />;
    } else if (testType === "Liver Function Test") {
      formType = <ViewLiverFunctionTestResultForm test={this.props.test} />;
    }
    return (
      <main className="edit__page">
        <div className="page-header">
          <h2 className="page-header__title">View Blood Test Result</h2>
        </div>
        <div className="content-container">
          {formType}
          <Link to={`/edit/${this.props.test.id}`}>
            <button className="button--primary" onClick={this.onSave}>
              <h4>Edit Test</h4>
            </button>
          </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewTestPage);
