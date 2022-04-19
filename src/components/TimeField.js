import TimeField from 'react-simple-timefield';
import React from 'react';

class TimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(e) {
      this.props.onTimeChange(e);
  }

  render() {
    return (
      <TimeField 
        value={this.props.time} 
        onChange={this.onTimeChange} 
        showSeconds={false} 
        input={<input type='text' className='todo-input' {...this.props.validation}/>}
        />
    );
  }
}

export default TimeInput;