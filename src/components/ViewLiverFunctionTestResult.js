import React from 'react';
import moment from 'moment';
import arrow from '../images/arrow.svg';

// View Liver Function Test Result Component
export default class ViewLiverFunctionTestResult extends React.Component {
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
      error: '',
      isProteinShown: false,
      isAlbuminShown:false,
      isBilirubinShown: false,
      isPhosphataseShown: false,
      isAltShown: false,
      isProteinInNorm: '',
      isAlbuminInNorm: '',
      isBilirubinInNorm: '',
      isPhosphataseInNorm: '',
      isAltInNorm: '',
    };
  }
  switchProtein = () => {
    this.setState({isProteinShown: !this.state.isProteinShown})
  }
  switchAlbumin = () => {
    this.setState({isAlbuminShown: !this.state.isAlbuminShown})
  }
  switchBilirubin = () => {
    this.setState({isBilirubinShown: !this.state.isBilirubinShown})
  }
  switchPhosphatase = () => {
    this.setState({isPhosphataseShown: !this.state.isPhosphataseShown})
  }
  switchAlt = () => {
    this.setState({isAltShown: !this.state.isAltShown})
  }
  TestInNorm = () => {
    if(this.state.protein >= 60 && this.state.protein <= 80){
      this.setState({isProteinInNorm: 'in'})
    } else if(this.state.protein < 60){
      this.setState({isProteinInNorm: 'below'})
    } else if(this.state.protein > 80){
      this.setState({isProteinInNorm: 'above'})
    }
    if(this.state.albumin >= 35 && this.state.albumin <= 50){
      this.setState({isAlbuminInNorm: 'in'})
    } else if(this.state.albumin < 35){
      this.setState({isAlbuminInNorm: 'below'})
    } else if(this.state.albumin > 50){
      this.setState({isAlbuminInNorm: 'above'})
    }
    if(this.state.bilirubin >= 4 && this.state.bilirubin <= 20){
      this.setState({isBilirubinInNorm: 'in'})
    } else if(this.state.bilirubin < 4){
      this.setState({isBilirubinInNorm: 'below'})
    } else if(this.state.bilirubin > 20){
      this.setState({isBilirubinInNorm: 'above'})
    }
    if(this.state.phosphatase >= 35 && this.state.phosphatase <= 105){
      this.setState({isPhosphataseInNorm: 'in'})
    } else if(this.state.phosphatase < 35){
      this.setState({isPhosphataseInNorm: 'below'})
    } else if(this.state.phosphatase > 105){
      this.setState({isPhosphataseInNorm: 'above'})
    }
    if(this.state.alt >= 5 && this.state.alt <= 38){
      this.setState({isAltInNorm: 'in'})
    } else if(this.state.alt < 5){
      this.setState({isAltInNorm: 'below'})
    } else if(this.state.alt > 38){
      this.setState({isAltInNorm: 'above'})
    }
  }

  render() {
    return (
      <div className='content' onLoad={this.TestInNorm}>
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
          <h4 className={this.state.isProteinInNorm === 'in' ? "in" : "out"}>{this.state.protein} g/L</h4>
          <img className={this.state.isProteinShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchProtein}/>
        </div>
        <div className={this.state.isProteinShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your serum total protein is <span className={this.state.isProteinInNorm === 'in' ? "in" : "out"}>{this.state.protein} g/L</span>. The norm is 60.00 - 80.00 g/L, your result is <span className={this.state.isProteinInNorm === 'in' ? "in" : "out"}>{this.state.isProteinInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Serum Albumin</h3>
          <h4 className={this.state.isAlbuminInNorm === 'in' ? "in" : "out"}>{this.state.albumin} g/L</h4>
          <img className={this.state.isAlbuminShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchAlbumin}/>
        </div>
        <div className={this.state.isAlbuminShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your serum albumin is <span className={this.state.isAlbuminInNorm === 'in' ? "in" : "out"}>{this.state.albumin} g/L</span>. The norm is 35.00 - 50.00 g/L, your result is <span className={this.state.isAlbuminInNorm === 'in' ? "in" : "out"}>{this.state.isAlbuminInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Serum Total Bilirubin Level</h3>
          <h4 className={this.state.isBilirubinInNorm === 'in' ? "in" : "out"}>{this.state.bilirubin} umol/L</h4>
          <img className={this.state.isBilirubinShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchBilirubin}/>
        </div>
        <div className={this.state.isBilirubinShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your serum bilirubin level is <span className={this.state.isBilirubinInNorm === 'in' ? "in" : "out"}>{this.state.bilirubin}</span> umol/L. The norm is 4.00 - 20.00 umol/L, your result is <span className={this.state.isBilirubinInNorm === 'in' ? "in" : "out"}>{this.state.isBilirubinInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Total Alkaline Phosphatase</h3>
          <h4 className={this.state.isPhosphataseInNorm === 'in' ? "in" : "out"}>{this.state.phosphatase} u/L</h4>
          <img className={this.state.isPhosphataseShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchPhosphatase}/>
        </div>
        <div className={this.state.isPhosphataseShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your total alkaline phosphatase is <span className={this.state.isPhosphataseInNorm === 'in' ? "in" : "out"}>{this.state.phosphatase}</span> u/L. The norm is 35.00 - 105.00 u/L, your result is <span className={this.state.isPhosphataseInNorm === 'in' ? "in" : "out"}>{this.state.isPhosphataseInNorm}</span> the norm.</h4>
        </div>

        <div className='content-text'>
          <h3>Serum ALT Level</h3>
          <h4 className={this.state.isAltInNorm === 'in' ? "in" : "out"}>{this.state.alt} u/L</h4>
          <img className={this.state.isAltShown === true ? "rotate-arrow" : ""} src={arrow} alt="logo" onClick={this.switchAlt}/>
        </div>
        <div className={this.state.isAltShown === true ? "sub__content-text show" : "sub__content-text hidden"}>
          <h4>Your serum ALT level is <span className={this.state.isAltInNorm === 'in' ? "in" : "out"}>{this.state.alt}</span> u/L. The norm is 5.00 - 38.00 u/L, your result is <span className={this.state.isAltInNorm === 'in' ? "in" : "out"}>{this.state.isAltInNorm}</span> the norm.</h4>
        </div>
      </div>

    )
  }
}
