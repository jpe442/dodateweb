import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const target = {
  drop(props) {
    
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class HourSlot extends React.Component {
  render() {
    const { connectDropTarget, isOver } = this.props;
    // const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
     <div></div>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
}

// BoardSquare.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired,
//   connectDropTarget: PropTypes.func.isRequired,
//   isOver: PropTypes.bool.isRequired
// };

export default DropTarget(ItemTypes.TASK, target, collect)(HourSlot);