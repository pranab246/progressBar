import React, { Component, PropTypes } from 'react';
import ProgressBar from '../components/ProgressBar';

export default class MainContainer extends Component {
  constructor(props) {
        super(props);
        this.state = {
				      series: {"buttons":[24,16,-38,-32],"bars":[81,24,86,70],"limit":220},
              		  defaultProgressBar:0
		    		}
}
  select(i){
    var value = i.target.value;
    this.setState({defaultProgressBar:value});
  }
  buttonClick(e){
    var series = this.state.series;
    var selectedValue = this.state.defaultProgressBar;
    series.bars[selectedValue] = (parseInt(series.bars[selectedValue])+parseInt(e) >= 0)?parseInt(series.bars[selectedValue])+parseInt(e):0;
    this.setState({series:series});
  }
  render () {
    var _this= this;
    var ProgressBarArray = [];
    var dropdownOption = [];
    var button = [];
    var count = 1;
    for(var i= 0; i < this.state.series.bars.length;i++){
        ProgressBarArray.push(<ProgressBar key={'progressbar'+i} label={_this.state.series.bars[i]+'%'} color={(_this.state.series.bars[i] > 100)?"#ea4853":"#AFD8E5"} width={(100/_this.state.series.limit)*_this.state.series.bars[i]+'%'} limit={_this.state.series.limit}/>);
        dropdownOption.push(<option key={i} value={i}># Progress Bar {count}</option>);
        count++;
    }
    for(var j= 0; j < this.state.series.buttons.length;j++){
        button.push(<button onClick={this.buttonClick.bind(_this,_this.state.series.buttons[j])}>{_this.state.series.buttons[j]}</button>);
    }
    return (
    		<div className="MainContainer" >
          <h2>Progress Bar</h2>
          {ProgressBarArray}
          <div className="bottomSection">
            <div className="selectBoxContainer">
              <select onChange={this.select.bind(this)}>{dropdownOption}</select>
            </div>
            <div className="buttonSection">{button}</div>
          </div>
    		</div>
    );
  }
}
