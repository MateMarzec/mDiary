import React from 'react';
import { connect } from 'react-redux';
import TestResultForm from './TestResultForm';
import { startEditTest, startRemoveTest } from '../actions/tests';

export class EditTestPage extends React.Component {
  onSubmit = (test) => {
    this.props.startEditTest(this.props.test.id, test);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveTest({ id: this.props.test.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Test</h1>
          </div>
        </div>
        <div className="content-container">
          <TestResultForm
            test={this.props.test}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Test</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    test: state.test.find((test) =>  test.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditTest: (id, test) => dispatch(startEditTest(id, test)),
  startRemoveTest: (data) => dispatch(startRemoveTest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTestPage);
