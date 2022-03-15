import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter} from '../actions/filters';
import addTest from '../images/addTest.png';

export class TestListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search Tests"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <Link to="/create">
            <div className="input-group__item" >
              <div className="link">
                <img src={addTest} alt="Add Test" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestListFilters);
