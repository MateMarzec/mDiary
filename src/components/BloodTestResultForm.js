import React from 'react';
import moment from 'moment';

// Blood Test Result Form Component
export default class BloodTestResultForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testType: 'Blood Test',
      description: props.test ? props.test.description : '',
      whiteCell: props.test ? (props.test.whiteCell / 100).toString() : '',
      redCell: props.test ? (props.test.redCell / 100).toString() : '',
      haemoglobin: props.test ? (props.test.haemoglobin / 100).toString() : '',
      mvc: props.test ? (props.test.mvc / 100).toString() : '',
      mch: props.test ? (props.test.mch / 100).toString() : '',
      mchc: props.test ? (props.test.mchc / 100).toString() : '',
      platelet: props.test ? (props.test.platelet / 100).toString() : '',
      neutrophil: props.test ? (props.test.neutrophil / 100).toString() : '',
      lymphocyte: props.test ? (props.test.lymphocyte / 100).toString() : '',
      monocyte: props.test ? (props.test.monocyte / 100).toString() : '',
      eosinophil: props.test ? (props.test.eosinophil / 100).toString() : '',
      basophil: props.test ? (props.test.basophil / 100).toString() : '',
      createdAt: props.test ? moment(props.test.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onWhiteCellChange = (e) => {
    const whiteCell = e.target.value;

    if (!whiteCell || whiteCell.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ whiteCell }));
    }
  };
  onRedCellChange = (e) => {
    const redCell = e.target.value;

    if (!redCell || redCell.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ redCell }));
    }
  };
  onHaemoglobinChange = (e) => {
    const haemoglobin = e.target.value;

    if (!haemoglobin || haemoglobin.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ haemoglobin }));
    }
  };
  onMvcChange = (e) => {
    const mvc = e.target.value;

    if (!mvc || mvc.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ mvc }));
    }
  };
  onMchChange = (e) => {
    const mch = e.target.value;

    if (!mch || mch.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ mch }));
    }
  };
  onMchcChange = (e) => {
    const mchc = e.target.value;

    if (!mchc || mchc.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ mchc }));
    }
  };
  onPlateletChange = (e) => {
    const platelet = e.target.value;

    if (!platelet || platelet.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ platelet }));
    }
  };
  onNeutrophilChange = (e) => {
    const neutrophil = e.target.value;

    if (!neutrophil || neutrophil.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ neutrophil }));
    }
  };
  onLymphocyteChange = (e) => {
    const lymphocyte = e.target.value;

    if (!lymphocyte || lymphocyte.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ lymphocyte }));
    }
  };
  onMonocyteChange = (e) => {
    const monocyte = e.target.value;

    if (!monocyte || monocyte.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ monocyte }));
    }
  };
  onEosinophilChange = (e) => {
    const eosinophil = e.target.value;

    if (!eosinophil || eosinophil.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ eosinophil }));
    }
  };
  onBasophilChange = (e) => {
    const basophil = e.target.value;

    if (!basophil || basophil.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ basophil }));
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

    if (!this.state.description || !this.state.whiteCell) {
      this.setState(() => ({ error: 'Please provide valid test results.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        testType: this.state.testType,
        description: this.state.description,
        whiteCell: parseFloat(this.state.whiteCell, 10) * 100,
        redCell: parseFloat(this.state.redCell, 10) * 100,
        haemoglobin: parseFloat(this.state.haemoglobin, 10) * 100,
        mvc: parseFloat(this.state.mvc, 10) * 100,
        mch: parseFloat(this.state.mch, 10) * 100,
        mchc: parseFloat(this.state.mchc, 10) * 100,
        platelet: parseFloat(this.state.platelet, 10) * 100,
        neutrophil: parseFloat(this.state.neutrophil, 10) * 100,
        lymphocyte: parseFloat(this.state.lymphocyte, 10) * 100,
        monocyte: parseFloat(this.state.monocyte, 10) * 100,
        eosinophil: parseFloat(this.state.eosinophil, 10) * 100,
        basophil: parseFloat(this.state.basophil, 10) * 100,
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
        <label className='label-input' htmlFor="whiteCell"><h4>White Cell Count</h4></label>
        <input
          id='whiteCell'
          type="text"
          className="text-input"
          value={this.state.whiteCell}
          onChange={this.onWhiteCellChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="redCell"><h4>Red Cell Count</h4></label>
        <input
          id='redCell'
          type="text"
          className="text-input"
          value={this.state.redCell}
          onChange={this.onRedCellChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="haemoglobin"><h4>Haemoglobin</h4></label>
        <input
          id='haemoglobin'
          type="text"
          className="text-input"
          value={this.state.haemoglobin}
          onChange={this.onHaemoglobinChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="mvc"><h4>Mean Corpuscular Volume</h4></label>
        <input
          id='mvc'
          type="text"
          className="text-input"
          value={this.state.mvc}
          onChange={this.onMvcChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="mch"><h4>Mean Corpuscular Haemoglobin</h4></label>
        <input
          id='mch'
          type="text"
          className="text-input"
          value={this.state.mch}
          onChange={this.onMchChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="mchc"><h4>Mean Corpuscular Haemoglobin conc.</h4></label>
        <input
          id='mchc'
          type="text"
          className="text-input"
          value={this.state.mchc}
          onChange={this.onMchcChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="platelet"><h4>Platelet Count</h4></label>
        <input
          id='platelet'
          type="text"
          className="text-input"
          value={this.state.platelet}
          onChange={this.onPlateletChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="neutrophil"><h4>Neutrophil Count</h4></label>
        <input
          id='neutrophil'
          type="text"
          className="text-input"
          value={this.state.neutrophil}
          onChange={this.onNeutrophilChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="lymphocyte"><h4>Lymphocyte Count</h4></label>
        <input
          id='lymphocyte'
          type="text"
          className="text-input"
          value={this.state.lymphocyte}
          onChange={this.onLymphocyteChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="monocyte"><h4>Monocyte Count</h4></label>
        <input
          id='monocyte'
          type="text"
          className="text-input"
          value={this.state.monocyte}
          onChange={this.onMonocyteChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="eosinophil"><h4>Eosinophil Count</h4></label>
        <input
          id='eosinophil'
          type="text"
          className="text-input"
          value={this.state.eosinophil}
          onChange={this.onEosinophilChange}
          autoComplete="off"
        />
        <label className='label-input' htmlFor="basophil"><h4>Basophil Count</h4></label>
        <input
          id='basophil'
          type="text"
          className="text-input"
          value={this.state.basophil}
          onChange={this.onBasophilChange}
          autoComplete="off"
        />
        <div>
          <button className="button"><h4>Save Test</h4></button>
        </div>
      </form>
    )
  }
}
