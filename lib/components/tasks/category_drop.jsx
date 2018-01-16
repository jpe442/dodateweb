import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// const styles = {
//   customWidth: {
//     width: 200,
//   },
// };

export default class CategoryDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: this.props.value};
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.props.handleInput.bind(this)

  }

  handleChange(event, index, value) {
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
            top: '28%',
            left: '50%'
          }}>
          <MenuItem value={"Misc."} primaryText="Misc." />
          <MenuItem value={"Home: General"} primaryText="Home: General" />
          <MenuItem value={"Home: Organization"} primaryText="Home: Organization"/>
          <MenuItem value={"Work: General"} primaryText="Work: General" />
          <MenuItem value={"Work: Organization"} primaryText="Work: Organization" />
        </DropDownMenu>
        <br />
      </div>
    );
  }
} 