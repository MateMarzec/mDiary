import React from 'react';
import moment from 'moment';
import arrow from '../images/arrow.svg';

// View Blood Test Result Component
export default class ViewBloodTestResult extends React.Component {
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
      error: '',
      isWhiteCellShown: false,
      isRedCellShown: false,
      isHaemoglobinShown: false,
      isMvcShown: false,
      isMchShown: false,
      isMchcShown: false,
      isPlateletShown: false,
      isNeutrophilShown: false,
      isLymphocyteShown: false,
      isMonocyteShown: false,
      isEosinophilShown: false,
      isBasophilShown: false,
      isWhiteCellInNorm: '',
      isRedCellInNorm: '',
      isHaemoglobinInNorm: '',
      isMvcInNorm: '',
      isMchInNorm: '',
      isMchcInNorm: '',
      isPlateletInNorm: '',
      isNeutrophilInNorm: '',
      isLymphocyteInNorm: '',
      isMonocyteInNorm: '',
      isEosinophilInNorm: '',
      isBasophilInNorm: '',
    };
  }
  switchWhiteCell = () => {
    this.setState({isWhiteCellShown: !this.state.isWhiteCellShown})
  }
  switchRedCell = () => {
    this.setState({isRedCellShown: !this.state.isRedCellShown})
  }
  switchHaemoglobin = () => {
    this.setState({isHaemoglobinShown: !this.state.isHaemoglobinShown})
  }
  switchMvc = () => {
    this.setState({isMvcShown: !this.state.isMvcShown})
  }
  switchMch = () => {
    this.setState({isMchShown: !this.state.isMchShown})
  }
  switchMchc = () => {
    this.setState({isMchcShown: !this.state.isMchcShown})
  }
  switchPlatelet = () => {
    this.setState({isPlateletShown: !this.state.isPlateletShown})
  }
  switchNeutrophil = () => {
    this.setState({isNeutrophilShown: !this.state.isNeutrophilShown})
  }
  switchLymphocyte = () => {
    this.setState({isLymphocyteShown: !this.state.isLymphocyteShown})
  }
  switchMonocyte = () => {
    this.setState({isMonocyteShown: !this.state.isMonocyteShown})
  }
  switchEosinophil = () => {
    this.setState({isEosinophilShown: !this.state.isEosinophilShown})
  }
  switchBasophil = () => {
    this.setState({isBasophilShown: !this.state.isBasophilShown})
  }

  TestInNorm = () => {
    if(this.state.whiteCell >= 4 && this.state.whiteCell <= 11.00){
      this.setState({isWhiteCellInNorm: 'in'})
    } else if(this.state.whiteCell < 4){
      this.setState({isWhiteCellInNorm: 'below'})
    } else if(this.state.whiteCell > 11.00){
      this.setState({isWhiteCellInNorm: 'above'})
    }
    if(this.state.redCell >= 4.1 && this.state.redCell <= 5.10){
      this.setState({isRedCellInNorm: 'in'})
    } else if(this.state.redCell < 4.1){
      this.setState({isRedCellInNorm: 'below'})
    } else if(this.state.redCell > 5.10){
      this.setState({isRedCellInNorm: 'above'})
    }
    if(this.state.haemoglobin >= 120 && this.state.haemoglobin <= 150){
      this.setState({isHaemoglobinInNorm: 'in'})
    } else if(this.state.haemoglobin < 120){
      this.setState({isHaemoglobinInNorm: 'below'})
    } else if(this.state.haemoglobin > 150){
      this.setState({isHaemoglobinInNorm: 'above'})
    }
    if(this.state.mvc >= 82 && this.state.mvc <= 105){
      this.setState({isMvcInNorm: 'in'})
    } else if(this.state.mvc < 82){
      this.setState({isMvcInNorm: 'below'})
    } else if(this.state.mvc > 105){
      this.setState({isMvcInNorm: 'above'})
    }
    if(this.state.mch >= 27 && this.state.mch <= 32){
      this.setState({isMchInNorm: 'in'})
    } else if(this.state.mch < 27){
      this.setState({isMchInNorm: 'below'})
    } else if(this.state.mch > 32){
      this.setState({isMchInNorm: 'above'})
    }
    if(this.state.mchc >= 315 && this.state.mchc <= 345){
      this.setState({isMchcInNorm: 'in'})
    } else if(this.state.mchc < 315){
      this.setState({isMchcInNorm: 'below'})
    } else if(this.state.mchc > 345){
      this.setState({isMchcInNorm: 'above'})
    }
    if(this.state.platelet >= 140 && this.state.platelet <= 400.00){
      this.setState({isPlateletInNorm: 'in'})
    } else if(this.state.platelet < 140){
      this.setState({isPlateletInNorm: 'below'})
    } else if(this.state.platelet > 400.00){
      this.setState({isPlateletInNorm: 'above'})
    }
    if(this.state.neutrophil >= 2 && this.state.neutrophil <= 7.00){
      this.setState({isNeutrophilInNorm: 'in'})
    } else if(this.state.neutrophil < 2){
      this.setState({isNeutrophilInNorm: 'below'})
    } else if(this.state.neutrophil > 7.00){
      this.setState({isNeutrophilInNorm: 'above'})
    }
    if(this.state.lymphocyte >= 1 && this.state.lymphocyte <= 3.00){
      this.setState({isLymphocyteInNorm: 'in'})
    } else if(this.state.lymphocyte < 1){
      this.setState({isLymphocyteInNorm: 'below'})
    } else if(this.state.lymphocyte > 3.00){
      this.setState({isLymphocyteInNorm: 'above'})
    }
    if(this.state.monocyte >= 0.2 && this.state.monocyte <= 1.00){
      this.setState({isMonocyteInNorm: 'in'})
    } else if(this.state.monocyte < 0.2){
      this.setState({isMonocyteInNorm: 'below'})
    } else if(this.state.monocyte > 1.00){
      this.setState({isMonocyteInNorm: 'above'})
    }
    if(this.state.eosinophil >= 0.02 && this.state.eosinophil <= 0.50){
      this.setState({isEosinophilInNorm: 'in'})
    } else if(this.state.eosinophil < 0.02){
      this.setState({isEosinophilInNorm: 'below'})
    } else if(this.state.eosinophil > 0.50){
      this.setState({isEosinophilInNorm: 'above'})
    }
    if(this.state.basophil >= 0.01 && this.state.basophil <= 0.10){
      this.setState({isBasophilInNorm: 'in'})
    } else if(this.state.basophil < 0.0){
      this.setState({isBasophilInNorm: 'below'})
    } else if(this.state.basophil > 0.10){
      this.setState({isBasophilInNorm: 'above'})
    }
  }

  render() {
    return (
      <div className='content' onLoad={this.TestInNorm}>
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
          <h4 className={this.state.isWhiteCellInNorm === 'in' ? "in" : "out"}>{this.state.whiteCell} 10<sup>9</sup>/L</h4>
          <img className={this.state.isWhiteCellShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchWhiteCell}/>
        </div>
        <div className={this.state.isWhiteCellShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your total white cell count is <span className={this.state.isWhiteCellInNorm === 'in' ? "in" : "out"}>{this.state.whiteCell} 10<sup>9</sup>/L</span>. The norm is 4.00 - 11.00 10<sup>9</sup>/L, your result is <span className={this.state.isWhiteCellInNorm === 'in' ? "in" : "out"}>{this.state.isWhiteCellInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Red Cell Count</h3>
          <h4 className={this.state.isRedCellInNorm === 'in' ? "in" : "out"}>{this.state.redCell} 10<sup>12</sup>/L</h4>
          <img className={this.state.isRedCellShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchRedCell}/>
        </div>
        <div className={this.state.isRedCellShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your total red cell count is <span className={this.state.isRedCellInNorm === 'in' ? "in" : "out"}>{this.state.redCell} 10<sup>12</sup>/L</span>. The norm is 4.10 - 5.10 10<sup>12</sup>/L, your result is <span className={this.state.isRedCellInNorm === 'in' ? "in" : "out"}>{this.state.isRedCellInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Haemoglobin</h3>
          <h4 className={this.state.isHaemoglobinInNorm === 'in' ? "in" : "out"}>{this.state.haemoglobin} g/L</h4>
          <img className={this.state.isHaemoglobinShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchHaemoglobin}/>
        </div>
        <div className={this.state.isHaemoglobinShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your haemoglobin is <span className={this.state.isHaemoglobinInNorm === 'in' ? "in" : "out"}>{this.state.haemoglobin} g/L</span>. The norm is 120.00 - 150.00 g/L, your result is <span className={this.state.isHaemoglobinInNorm === 'in' ? "in" : "out"}>{this.state.isHaemoglobinInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Mean Corpuscular Volume</h3>
          <h4 className={this.state.isMvcInNorm === 'in' ? "in" : "out"}>{this.state.mvc} fL</h4>
          <img className={this.state.isMvcShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchMvc}/>
        </div>
        <div className={this.state.isMvcShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your mean corpuscular volume is <span className={this.state.isMvcInNorm === 'in' ? "in" : "out"}>{this.state.mvc} fL</span>. The norm is 82.00 - 105.00 fL, your result is <span className={this.state.isMvcInNorm === 'in' ? "in" : "out"}>{this.state.isMvcInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Mean Corpuscular Haemoglobin</h3>
          <h4 className={this.state.isMchInNorm === 'in' ? "in" : "out"}>{this.state.mch} pg</h4>
          <img className={this.state.isMchShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchMch}/>
        </div>
        <div className={this.state.isMchShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your mean corpuscular haemoglobin is <span className={this.state.isMchInNorm === 'in' ? "in" : "out"}>{this.state.mch} pg</span>. The norm is 27.00 - 32.00 pg, your result is <span className={this.state.isMchInNorm === 'in' ? "in" : "out"}>{this.state.isMchInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Mean Corpuscular Haemoglobin Concentration</h3>
          <h4 className={this.state.isMchcInNorm === 'in' ? "in" : "out"}>{this.state.mchc} g/L</h4>
          <img className={this.state.isMchcShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchMchc}/>
        </div>
        <div className={this.state.isMchcShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your mean corpuscular haemoglobin concentration is <span className={this.state.isMchcInNorm === 'in' ? "in" : "out"}>{this.state.mchc} g/L</span>. The norm is 315.00 - 345.00 g/L, your result is <span className={this.state.isMchcInNorm === 'in' ? "in" : "out"}>{this.state.isMchcInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Platelet Count</h3>
          <h4 className={this.state.isPlateletInNorm === 'in' ? "in" : "out"}>{this.state.platelet} 10<sup>9</sup>/L</h4>
          <img className={this.state.isPlateletShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchPlatelet}/>
        </div>
        <div className={this.state.isPlateletShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your platelet count is <span className={this.state.isPlateletInNorm === 'in' ? "in" : "out"}>{this.state.platelet} 10<sup>9</sup>/L</span>. The norm is 140.00 - 400.00 10<sup>9</sup>/L, your result is <span className={this.state.isPlateletInNorm === 'in' ? "in" : "out"}>{this.state.isPlateletInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Neutrophil Count</h3>
          <h4 className={this.state.isNeutrophilInNorm === 'in' ? "in" : "out"}>{this.state.neutrophil} 10<sup>9</sup>/L</h4>
          <img className={this.state.isNeutrophilShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchNeutrophil}/>
        </div>
        <div className={this.state.isNeutrophilShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your neutrophil count is <span className={this.state.isNeutrophilInNorm === 'in' ? "in" : "out"}>{this.state.neutrophil} 10<sup>9</sup>/L</span>. The norm is 2.00 - 7.00 10<sup>9</sup>/L, your result is <span className={this.state.isNeutrophilInNorm === 'in' ? "in" : "out"}>{this.state.isNeutrophilInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Lymphocyte Count:</h3>
          <h4 className={this.state.isLymphocyteInNorm === 'in' ? "in" : "out"}>{this.state.lymphocyte} 10<sup>9</sup>/L</h4>
          <img className={this.state.isLymphocyteShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchLymphocyte}/>
        </div>
        <div className={this.state.isLymphocyteShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your lymphocyte count is <span className={this.state.isLymphocyteInNorm === 'in' ? "in" : "out"}>{this.state.lymphocyte} 10<sup>9</sup>/L</span>. The norm is 1.00 - 3.00 10<sup>9</sup>/L, your result is <span className={this.state.isLymphocyteInNorm === 'in' ? "in" : "out"}>{this.state.isLymphocyteInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Monocyte Count</h3>
          <h4 className={this.state.isMonocyteInNorm === 'in' ? "in" : "out"}>{this.state.monocyte} 10<sup>9</sup>/L</h4>
          <img className={this.state.isMonocyteShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchMonocyte}/>
        </div>
        <div className={this.state.isMonocyteShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your monocyte count is <span className={this.state.isMonocyteInNorm === 'in' ? "in" : "out"}>{this.state.monocyte} 10<sup>9</sup>/L</span>. The norm is 0.20 - 1.00 10<sup>9</sup>/L, your result is <span className={this.state.isMonocyteInNorm === 'in' ? "in" : "out"}>{this.state.isMonocyteInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Eosinophil Count</h3>
          <h4 className={this.state.isEosinophilInNorm === 'in' ? "in" : "out"}>{this.state.eosinophil} 10<sup>9</sup>/L</h4>
          <img className={this.state.isEosinophilShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchEosinophil}/>
        </div>
        <div className={this.state.isEosinophilShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your eosinophil count is <span className={this.state.isEosinophilInNorm === 'in' ? "in" : "out"}>{this.state.eosinophil} 10<sup>9</sup>/L</span>. The norm is 0.02 - 0.50 10<sup>9</sup>/L, your result is <span className={this.state.isEosinophilInNorm === 'in' ? "in" : "out"}>{this.state.isEosinophilInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Basophil Count</h3>
          <h4 className={this.state.isBasophilInNorm === 'in' ? "in" : "out"}>{this.state.basophil} 10<sup>9</sup>/L</h4>
          <img className={this.state.isBasophilShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchBasophil}/>
        </div>
        <div className={this.state.isBasophilShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your basophil count is <span className={this.state.isBasophilInNorm === 'in' ? "in" : "out"}>{this.state.basophil} 10<sup>9</sup>/L</span>. The norm is 0.01 - 0.10 10<sup>9</sup>/L, your result is <span className={this.state.isBasophilInNorm === 'in' ? "in" : "out"}>{this.state.isBasophilInNorm}</span> the norm.</h4>
        </div>
      </div>

    )
  }
}
