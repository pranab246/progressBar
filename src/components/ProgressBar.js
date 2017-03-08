import React, { Component, PropTypes } from 'react';

export default class ProgressBar extends Component {
  render () {
    return (
    		<div className="">
           <div className="ProgressBarSection">
             <div className="ProgressBarCount">{this.props.label}</div>
             <div className="ProgressBarBody" style={{width:this.props.width,background:this.props.color}}></div>
           </div>
    		</div>
    );
  }
}
