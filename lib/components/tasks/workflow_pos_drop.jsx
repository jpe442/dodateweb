import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// const styles = {
//   customWidth: {
//     width: 200,
//   },
// };

export default class WorkFlowDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 'unscheduled' };
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.props.handleInput.bind(this)

  }

  handleChange(event, index, value) {
    console.log()
    console.log(value)
    this.setState({ value });
    // console.log(this.props.handleInput)
    this.props.handleInput('workflow_pos', value)
  } 

  render() {
    return (
      <div>
        <DropDownMenu 
          value={this.state.value} 
          onChange={this.handleChange} 
          style={{
              position: 'absolute', 
              top: '65%',
              left: '65%'
                  }}>
          <MenuItem value={'unscheduled'} primaryText="Unscheduled" />
          <MenuItem value={'M'} primaryText="Monday" />
          <MenuItem value={'T'} primaryText="Tuesday" />
          <MenuItem value={'W'} primaryText="Wednesday" />
          <MenuItem value={'TH'} primaryText="Thursday" />
          <MenuItem value={'F'} primaryText="Friday" />
          <MenuItem value={'ST'} primaryText="Saturday" />
          <MenuItem value={'SN'} primaryText="Sunday" />
          <MenuItem value={'D'} primaryText="Done" />
        </DropDownMenu>
        <br />
      </div>
    );
  }
} 