import React from 'react';
import moment from 'moment';
import arrow from '../images/arrow.svg';

export default class ViewBloodTestResultForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeTest: props.test ? props.test.testType : '',
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
  render() {
    return (
      <div className='content'>
        <div className='content-text'>
          <h3>Test Type</h3>
          <h4>{this.state.typeTest}</h4>
        </div>
        <div className='content-text'>
          <h3>Title</h3>
          <h4>{this.state.description}</h4>
        </div>
        <div className='content-text'>
          <h3>White Cell Count</h3>
          <h4>{this.state.whiteCell} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Red Cell Count</h3>
          <h4>{this.state.redCell} 10<sup>12</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Haemoglobin Count</h3>
          <h4>{this.state.haemoglobin} g/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Haemoglobin</h3>
          <h4>{this.state.mvc} fL</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Mean Corpuscular Volume</h3>
          <h4>{this.state.mch} pg</h4>
        </div>
        <div className='content-text'>
          <h3>Mean Corpuscular Haemoglobin conc</h3>
          <h4>{this.state.mchc} g/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Platelet Count</h3>
          <h4>{this.state.platelet} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Neutrophil Count</h3>
          <h4>{this.state.neutrophil} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Lymphocyte Count:</h3>
          <h4>{this.state.lymphocyte} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Monocyte Count</h3>
          <h4>{this.state.monocyte} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Eosinophil Count</h3>
          <h4>{this.state.eosinophil} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
        <div className='content-text'>
          <h3>Basophil Count</h3>
          <h4>{this.state.basophil} 10<sup>9</sup>/L</h4>
          <img src={arrow} alt="logo" />
        </div>
      </div>

    )
  }
}
