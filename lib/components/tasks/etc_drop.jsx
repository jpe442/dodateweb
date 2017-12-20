import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// const styles = {
//   customWidth: {
//     width: 200,
//   },
// };

export default class ETCDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 60 };
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.props.handleInput.bind(this)

  }

  handleChange(event, index, value) {
    console.log()
    console.log(value)
    this.setState({ value });
    this.props.handleInput('tag', value)
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
            left: '50%'
          }}>
          <MenuItem value={this.state.value} primaryText="60" />
          {/* <MenuItem value={} primaryText="" />
          <MenuItem value={} primaryText="" />
          <MenuItem value={} primaryText="" />
          <MenuItem value={} primaryText="" />
          <MenuItem value={} primaryText="" />
          <MenuItem value={} primaryText="" />
          <MenuItem value={} primaryText="" /> */}
        </DropDownMenu>
        <br />
      </div>
    );
  }
} 