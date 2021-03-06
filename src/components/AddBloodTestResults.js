import React from 'react';
import { connect } from 'react-redux';
import { startAddTest } from '../actions/tests';
import BloodTestResultForm from './BloodTestResultForm';

// Add Blood Test Results Component
export class AddTestPage extends React.Component {
  onSubmit = (test) => {
    this.props.startAddTest(test);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <main className='create__page'>
        <div className="page-header">
          <h2>Full Blood Count Test Result</h2>
        </div>
        <div className="content-container">
          <BloodTestResultForm
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
