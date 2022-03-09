import React from 'react';
import { connect } from 'react-redux';
import TestResultForm from './TestResultForm';
import { startAddTest } from '../actions/tests';

export class AddTestPage extends React.Component {
  onSubmit = (test) => {
    this.props.startAddTest(test);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Test</h1>
          </div>
        </div>
        <div className="content-container">
          <TestResultForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTest: (test) => dispatch(startAddTest(test))
});

export default connect(undefined, mapDispatchToProps)(AddTestPage);
