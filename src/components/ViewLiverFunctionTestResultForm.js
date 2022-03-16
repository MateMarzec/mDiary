import React from 'react';
import moment from 'moment';

export default class ViewLiverFunctionTestResultForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testType: 'Liver Function Test',
      description: props.test ? props.test.description : '',
      protein: props.test ? (props.test.protein / 100).toString() : '',
      albumin: props.test ? (props.test.albumin / 100).toString() : '',
      bilirubin: props.test ? (props.test.bilirubin / 100).toString() : '',
      phosphatase: props.test ? (props.test.phosphatase / 100).toString() : '',
      alt: props.test ? (props.test.alt / 100).toString() : '',
      createdAt: props.test ? moment(props.test.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  render() {
    return (
      <div className='content'>
        <div className='content-text'>
          <h3>Test Type</h3>
          <h4>{this.state.testType}</h4>
        </div>
        <div className='content-text'>
          <h3>Title</h3>
          <h4>{this.state.description}</h4>
        </div>
        <div className='content-text'>
          <h3>Serum Total Protein</h3>
          <h4>{this.state.protein} g/L</h4>
        </div>
        <div className='content-text'>
          <h3>Serum Albumin</h3>
          <h4>{this.state.albumin} g/L</h4>
        </div>
        <div className='content-text'>
          <h3>Serum Total Bilirubin Level</h3>
          <h4>{this.state.bilirubin} umol/L</h4>
        </div>
        <div className='content-text'>
          <h3>Total Alkaline Phosphatase</h3>
          <h4>{this.state.phosphatase} u/L</h4>
        </div>
        <div className='content-text'>
          <h3>Serum ALT Level</h3>
          <h4>{this.state.alt} u/L</h4>
        </div>
      </div>

    )
  }
}
