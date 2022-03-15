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
      <main className='create__page'>
        <div className="page-header">
          <h2>Add Blood Test Result</h2>
        </div>
        <div className="content-container">
          <TestResultForm
            onSubmit={this.onSubmit}
          />
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTest: (test) => dispatch(startAddTest(test))
});

export default connect(undefined, mapDispatchToProps)(AddTestPage);
