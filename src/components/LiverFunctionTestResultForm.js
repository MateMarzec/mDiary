import React from 'react';
import moment from 'moment';

export default class LiverFunctionTestResultForm extends React.Component {
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
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onProteinChange = (e) => {
    const protein = e.target.value;

    if (!protein || protein.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ protein }));
    }
  };
  onAlbuminChange = (e) => {
    const albumin = e.target.value;

    if (!albumin || albumin.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ albumin }));
    }
  };
  onBilirubinChange = (e) => {
    const bilirubin = e.target.value;

    if (!bilirubin || bilirubin.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ bilirubin }));
    }
  };
  onPhosphataseChange = (e) => {
    const phosphatase = e.target.value;

    if (!phosphatase || phosphatase.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ phosphatase }));
    }
  };
  onAltChange = (e) => {
    const alt = e.target.value;

    if (!alt || alt.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ alt }));
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

    if (!this.state.description || !this.state.protein) {
      this.setState(() => ({ error: 'Please provide valid test results.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        testType: this.state.testType,
        description: this.state.description,
        protein: parseFloat(this.state.protein, 10) * 100,
        albumin: parseFloat(this.state.albumin, 10) * 100,
        bilirubin: parseFloat(this.state.bilirubin, 10) * 100,
        phosphatase: parseFloat(this.state.phosphatase, 10) * 100,
        alt: parseFloat(this.state.alt, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <label className='label-input' htmlFor="testType"><h4>Test Type</h4></label>
        <input
          id='testType'
          type="text"
          autoFocus
          className="text-input disabled-input"
          value={this.state.testType}
          disabled
        />
        <label className='label-input' htmlFor="description"><h4>Description</h4></label>
        <input
          id='description'
          type="text"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="protein"><h4>Serum Total Protein</h4></label>
        <input
          id='protein'
          type="text"
          className="text-input"
          value={this.state.protein}
          onChange={this.onProteinChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="albumin"><h4>Serum Albumin</h4></label>
        <input
          id='albumin'
          type="text"
          className="text-input"
          value={this.state.albumin}
          onChange={this.onAlbuminChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="bilirubin"><h4>Serum Total Bilirubin Level</h4></label>
        <input
          id='bilirubin'
          type="text"
          className="text-input"
          value={this.state.bilirubin}
          onChange={this.onBilirubinChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="phosphatase"><h4>Total Alkaline Phosphatase</h4></label>
        <input
          id='phosphatase'
          type="text"
          className="text-input"
          value={this.state.phosphatase}
          onChange={this.onPhosphataseChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="alt"><h4>Serum ALT Level</h4></label>
        <input
          id='alt'
          type="text"
          className="text-input"
          value={this.state.alt}
          onChange={this.onAltChange}
          autoComplete="off"
        />
        <div>
          <button className="button"><h4>Save Test</h4></button>
        </div>
      </form>
    )
  }
}
