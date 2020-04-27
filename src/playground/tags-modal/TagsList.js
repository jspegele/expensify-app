import React from 'react';
import { connect } from 'react-redux';
import { FaRegSave, FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { startAddTag, startEditTag, startRemoveTag } from '../actions/tags';

export class TagsList extends React.Component {
  state = {
    activeId: '',
    newTagValue: '',
    editTagValue: ''

  };
  onNewTagChange = (e) => {
    const newTagValue = e.target.value;
    this.setState(() => ({ newTagValue }));
  };
  handleNewTag = (e) => {
    e.preventDefault();
    this.props.startAddTag(this.state.newTagValue);
    this.setState(() => ({ newTagValue: '' }));
  };
  handleEditTag = (id, name) => {
    const editTagValue = name;
    this.setState(() => ({ 
      activeId: id,
      editTagValue
    }));
  };
  onEditTagChange = (e) => {
    const editTagValue = e.target.value;
    this.setState(() => ({ editTagValue }));
  };
  handleSaveTag = (e) => {
    e.preventDefault();
    this.props.startEditTag(this.state.activeId, this.state.editTagValue);
    this.setState(() => ({ 
      activeId: '',
      editTagValue: ''
    }));
  };
  handleRemoveTag = (id) => {
    this.props.startRemoveTag({ id });
  };
  onTagFocus = (e) => {
    const activeId = e.target.id;
    this.setState(() => ({ activeId }));
  };
  render() {
    const tags = this.props.tags;
    return (
      <div>
          {
            tags.map(tag => {
              const tagClasses = (this.state.activeId === tag.id ? "tag tag--active" : "tag");
              return (
                <div key={tag.id}>{
                  this.state.activeId === tag.id ? (
                    <form className={tagClasses} id={tag.id} onSubmit={this.handleSaveTag}>  
                      <input
                        className="text-input text-input--tag"
                        value={this.state.editTagValue}
                        onChange={this.onEditTagChange}
                        autoFocus
                        onFocus={(e) => {
                          var val = e.target.value;
                          e.target.value = '';
                          e.target.value = val;
                        }}
                      />
                      <button alt="Save tag" title="Save tag">
                        <FaRegSave size="1.8rem" className="tag__icon" />
                      </button>
                    </form>
                  ) : (
                    <div className={tagClasses} id={tag.id}>
                      <span>{tag.name}</span>
                      <button type="button" onClick={() => this.handleEditTag(tag.id, tag.name)} alt="Edit tag" title="Edit tag">
                        <FaPencilAlt size="1.8rem" className="tag__icon" />
                      </button>
                      <button type="button" onClick={() => this.handleRemoveTag(tag.id)} alt="Delete tag" title="Delete tag">
                        <FaRegTrashAlt size="1.8rem" className="tag__icon" />
                      </button>
                    </div>
                  )
                }</div>
              );
            })
          }
        <form className={this.state.activeId === "new-tag" ? "tag tag--form tag--active" : "tag tag--form"} onSubmit={this.handleNewTag}>
          <input
            className="text-input text-input--tag"
            id="new-tag"
            placeholder="Add a new tag"
            value={this.state.newTagValue}
            onFocus={this.onTagFocus}
            onChange={this.onNewTagChange}
          />
          <button alt="Save tag" title="Save tag">
            <FaRegSave size="1.8rem" className="tag__icon" />
          </button>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
  startAddTag: (tags) => dispatch(startAddTag(tags)),
  startRemoveTag: (id) => dispatch(startRemoveTag(id)),
  startEditTag: (id, name) => dispatch(startEditTag(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsList);
