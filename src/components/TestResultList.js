import React from 'react';
import { connect } from 'react-redux';
import TestResultListItem from './TestResultListItem';
import selectTests from '../selectors/tests';

export const TestResultList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Tests</div>
      <div className="show-for-desktop">Test</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.tests.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No tests</span>
          </div>
        ) : (
            props.tests.map((test) => {
              return <TestResultListItem key={test.id} {...test} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    tests: selectTests(state.test, state.filters)
  };
};

export default connect(mapStateToProps)(TestResultList);
