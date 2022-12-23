import React from 'react'
//Code for the progressbar of the region data usage
class ProgressBar extends React.Component {
    constructor(props) {
      super(props);    
    }
   
    render() {  	
          const parent = this.props;
         
        let values = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="value" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>{item.value}%</span>
                    </div>
                )
            }
        }, this);
  
        let calibrations = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="graduation" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>|</span>
                    </div>
                )
            }
        }, this);
  
        let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}>
  
                    </div>
                )
            }
        }, this);
  
        let legends = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
              if(item.value > 0) {
                return (
                    <div className="legend" key={i}>
                        <span className="square" style={{'color': item.color}}>&#9632;</span>
                        <span className="label">{item.name}</span>
                    </div>
             )
         }
      }, this);
  
      return (
        <div className="multicolor-bar">
       
            <div className="values">
                {values == ''?'':values}
            </div>
            <div className="scale">
                {calibrations == ''?'':calibrations}
            </div>
            <div className="bars">
                {bars == ''?'':bars}
            </div>
            <div className="legends">
                {legends == ''?'':legends}
            </div>
        </div>
      );
    }
  }
  
  export let readings = [
      {
          name: '>$5K',
          value: 36,
          color: '#7F00FF'
      },
      {
          name: '$1K-$5K',
          value: 24,
          color: '#4169E1 '
      },
      {
          name: '$500-$1K',
          value: 20,
          color: '#6495ED '
          
      },
      {
          name: '<$500',
          value: 20,
          color: '#89CFF0'
      }
  ];
  
  export default ProgressBar;
    
  
  
  