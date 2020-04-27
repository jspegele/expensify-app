import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaCircle } from 'react-icons/fa';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, tags = ''}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div className="list-item__description">
      <h3 className="list-item__title">{description}</h3>
      <div><span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span></div>
    </div>
    <div className="list-item__details">
      <h3 className="list-item__date">{numeral(amount / 100).format('$0,0.00')}</h3>
      <div className="list-item__tags">
      {
        tags.split(',').map((tag, i) => (
          <span className="list-item__tag" id={tag} key={tag}>
            {i > 0 && <FaCircle size=".5rem" />}
            {tag}
          </span>
        ))
      }
      </div>
    </div>
  </Link>
);

export default ExpenseListItem;