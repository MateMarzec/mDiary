import React from 'react';
import moment from 'moment';
//import { SingleDatePicker } from 'react-dates';

export default class TestResultForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.test ? props.test.description : '',
      note: props.test ? props.test.note : '',
      amount: props.test ? (props.test.amount / 100).toString() : '',
      createdAt: props.test ? moment(props.test.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide Description and Amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <label className='label-input' for="description"><h4>Description</h4></label>
        <input
          id='description'
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <label className='label-input' for="amount"><h4>Amount</h4></label>
        <input
          id='amount'
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <label className='label-input' for="note"><h4>Note(Optional)</h4></label>
        <textarea
          id='note'
          placeholder="Add a note for your test (optional)"
          className="text-input"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button"><h4>Add Test</h4></button>
        </div>
      </form>
    )
  }
}
