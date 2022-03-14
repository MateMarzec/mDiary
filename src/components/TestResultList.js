import React from 'react';
import { connect } from 'react-redux';
import TestResultListItem from './TestResultListItem';
import selectTests from '../selectors/tests';

export const TestResultList = (props) => (
  <div className="list-body">
      {
        props.tests.length === 0 ? (
          <div className="list-item list-item--message">
            <h3>No Tests</h3>
          </div>
        ) : (
            props.tests.map((test) => {
              return <TestResultListItem key={test.id} {...test} />;
            })
          )
      }
    </div>
);

const mapStateToProps = (state) => {
  return {
    tests: selectTests(state.test, state.filters)
  };
};

export default connect(mapStateToProps)(TestResultList);
