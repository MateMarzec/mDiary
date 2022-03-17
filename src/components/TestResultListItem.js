import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Test Result List Item Component
const TestListItem = ({ id, description, createdAt }) => (
  <Link to={`/view/${id}`}>
    <div className="list-item">
      <h4 className="list-item__title">{description}</h4>
      <h4 className="list-item__sub-title">{moment(createdAt).format(' D.MM.YYYY')}</h4>
    </div>
  </Link>
);

export default TestListItem;
