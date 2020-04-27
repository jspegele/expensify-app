import React from 'react';
import { FaTimes } from 'react-icons/fa';

class TagList extends React.Component {
  handleRemoveTag = (e) => {
    const updatedTags = this.props.expense.tags.split(',').filter((tag) => tag !== e.target.id).join(',');
    // this.props.startEditExpense(this.props.expense.id, { tags: updatedTags });
    this.props.handleRemoveTag(updatedTags);
  };
  render() {
    let tags = this.props.expense.tags, tagArray = [], tagClasses = '';
    if(tags && tags.length > 0) {
      tagArray = tags.split(',');
      tagClasses = 'form__tags';
    }
    return (
      <div className={tagClasses}>
        {
          tagArray.map((tag, i) => (
            <button
              className="form__tag"
              id={tag}
              key={i}
              type="button"
              title="Remove tag"
              onClick={this.handleRemoveTag}
            >
              {tag}<FaTimes size="1.4rem" />
            </button>
          ))
        }
      </div>
    );
  };
};

export default TagList;