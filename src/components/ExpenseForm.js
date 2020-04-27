import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { FaPlus } from 'react-icons/fa';
import { startEditExpense } from '../actions/expenses';
import TagList from './TagList';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      newTags: '',
      savedTags: props.expense ? (props.expense.tags ? props.expense.tags : '') : '',
      calendarFocused: false,
      modalOpen: false,
      edited: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description, edited: true }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount, edited: true }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note, edited: true }));
  };
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt, edited: true }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onTagsChange = (e) => {
    const newTags = e.target.value;
    if (!newTags || newTags.match(/^[\w\,\s]*$/)) {
      if (newTags.indexOf(',,') > -1) {
        this.setState(() => ({ error: 'Invalid character in tags. Please separate tags by a single comma.' }));
      } else if (newTags.indexOf('  ') === -1) {
        this.setState(() => ({
          newTags,
          error: '',
          edited: true
        }));
      }
    } else {
      this.setState(() => ({ error: 'Invalid character in tags. Please use only letters and numbers.' }));
    }
  };
  handleAddTags = () => {
    const combinedTags = this.state.savedTags.concat(',' + this.state.newTags).split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0);
    const tags = combinedTags.filter((tag, i) => combinedTags.indexOf(tag) === i).join(',').toLowerCase();
    this.props.handleAddTags({ tags });
    this.setState(() => ({
      newTags: '',
      savedTags: tags
    }));
  };
  handleRemoveTag = (savedTags) => {
    this.props.startEditExpense(this.props.expense.id, { tags: savedTags });
    this.setState(() => ({ savedTags }))
  };
  onSubmit = (e) => {
    e.preventDefault();

    const combinedTags = this.state.savedTags.concat(',' + this.state.newTags).split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0);
    const tags = combinedTags.filter((tag, i) => combinedTags.indexOf(tag) === i).join(',').toLowerCase();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
        tags: tags
      });
    }
  };
  render() {
    const saveButtonClass = this.state.edited ? "button" : "button button--disabled";
    const saveTagsClass = this.state.newTags.length > 0 ? "save-tags save-tags--active" : "save-tags";
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="text-input"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            className="textarea"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div className="tag-input-wrapper">
            <input
              className="text-input"
              type="text"
              placeholder="Add tags separated by commas (ex: travel, hawaii, hotel)"
              value={this.state.newTags}
              onChange={this.onTagsChange}
            />
            { 
              this.props.expense && 
              <FaPlus className={saveTagsClass} size="3.2rem" title="Add tags" onClick={this.handleAddTags} />
            }
          </div>
          { this.props.expense && <TagList expense={this.props.expense} handleRemoveTag={this.handleRemoveTag} />}
          { this.state.error && <p className="form__error">{this.state.error}</p>}
          <div>
            <button className={saveButtonClass} type="submit">Save Expense</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(undefined, mapDispatchToProps)(ExpenseForm);
