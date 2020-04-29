import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaCircle } from 'react-icons/fa';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, type, description, amount, createdAt, tags = ''}) => {
  let amountFormatted = numeral(amount / 100).format('$0,0.00');
  let amountClass = "list-item__amount";
  if (type === 'income') {
    amountClass += " green-text"; 
  } else {
    amountFormatted = '-' + amountFormatted;
  }
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div className="list-item__title">{description}</div>
      <div className="list-item__date show-for-mobile">{moment(createdAt).format('MMM D')}</div>
      <div className="list-item__date show-for-desktop">{moment(createdAt).format('MMMM D YYYY')}</div>
      <div className={amountClass}>{amountFormatted}</div>
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
    </Link>
  );
};

export default ExpenseListItem;