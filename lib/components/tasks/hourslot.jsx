import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../util/dnd';
import { DropTarget } from 'react-dnd';
// import { moveTask } from ''

const moveTask = (item, workflowPos, timeSlot) => {
  console.log("in move task")
  console.log(item)
  item.moveTask(item.id, workflowPos, timeSlot)
}

const slotTarget = {
  drop(props, monitor) {
    console.log("here in slotTarget")
    console.log(this)
    console.log(props)
    moveTask(monitor.getItem(), props.workflowpos, props.timeslot)
  }
};

function collect(connect, monitor) {
  console.log("here in hourslot collect")
  console.log(monitor.getItem())
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem(),
  };
}

class HourSlot extends React.Component {
  render() {
    const { workflowpos, timeslot, connectDropTarget, isOver, item} = this.props;
    // const black = (x + y) % 2 === 1;
    const itemHover = isOver && item ? item.id : null;
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '8.333333%',
        fontsize: 16
      }}>
     <div>{this.props.children}</div>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'lightgray',
          }} />
        }
      </div>
    );
  }
}

HourSlot.propTypes = {
  workflowpos: PropTypes.string.isRequired,
  timeslot: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.TASK, slotTarget, collect)(HourSlot);