import React from 'react';
import { connect } from 'react-redux';
import LiverFunctionTestResultForm from './LiverFunctionTestResultForm';
import { startAddTest } from '../actions/tests';

export class AddTestPage extends React.Component {
  onSubmit = (test) => {
    this.props.startAddTest(test);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <main className='create__page'>
        <div className="page-header">
          <h2>Add Blood Test Result</h2>
        </div>
        <div className="content-container">
          <LiverFunctionTestResultForm
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
