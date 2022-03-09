import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectTests from '../selectors/tests';
import selectTestsTotal from '../selectors/tests-total';

export const TestsSummary = ({ testCount, testsTotal }) => {
  const testWord = testCount === 1 ? 'test' : 'tests';
  const formattedTestsTotal = numeral(testsTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{testCount}</span> {testWord} totalling <span>{formattedTestsTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Test</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleTests = selectTests(state.tests, state.filters);

  return {
    testCount: visibleTests.length,
    testsTotal: selectTestsTotal(visibleTests)
  };
};

export default connect(mapStateToProps)(TestsSummary);