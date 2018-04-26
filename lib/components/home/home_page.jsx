import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import TodoItemContainer from '../tasks/todoitem_container';
import HourSlot from '../tasks/hourslot';
import Checkbox from 'material-ui/Checkbox';
import LeftSideBarContainer from '../do_left_container/left_sidebar_container';
import RightSideBarContainer from '../done_right_container/right_sidebar_container';
import BottomBarContainer from '../bottom_bar/bottom_bar_container';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.moveTask = this.moveTask.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState(newProps.todos);
  // }

  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  moveTask(itemId, workflowPos, timeSlot) {
    let moveTodo = {
      id: itemId,
      workflow_pos: workflowPos,
      time_slot: timeSlot,
      tag: this.props.todos[itemId].tag,
      notes: this.props.todos[itemId].notes,
      etc: this.props.todos[itemId].etc,
      user_id: this.props.currentUser.id
    };
    this.props.updateTodo(this.props.currentUser.id, moveTodo);
  }

  render () {
    let todosVals = Object.values(this.props.todos);
    let todosMonday = todosVals.filter(todo => todo.workflow_pos === 'M');
    let todosTuesday = todosVals.filter(todo => todo.workflow_pos === 'T');
    let todosWednesday = todosVals.filter(todo => todo.workflow_pos === 'W');
    let todosThursday = todosVals.filter(todo => todo.workflow_pos === 'TH');
    let todosFriday = todosVals.filter(todo => todo.workflow_pos === 'F');

    const hours = [];
    for (let i = 8; i < 20; i++) {
      if (i > 12) {
        let hourNum = i - 12;
        hours.push({rawHour: i, hour: hourNum, timeOfDay: "p" });
      } else {
        if (i === 12) {
          hours.push({ rawHour: i, hour: i, timeOfDay: "p" });
        } else {
          hours.push({ rawHour: i, hour: i, timeOfDay: "a" });
        }
      }
    }

    const task = (workflowPos, timeSlot) => {
      let todosToday = todosVals.filter(todo => todo.workflow_pos === workflowPos);
      if (todosToday.some((todo) => (todo.time_slot === timeSlot))) {
        let todosNow = todosToday.filter(todo => (todo.time_slot === timeSlot));
        return (
          todosNow.map(todo => 
            <TodoItemContainer
              key={todo.id}
              todo={this.props.todos[todo.id]}
              moveTask={this.moveTask}
              // style={{height: '100%'}}
            />
          )
        );
      }
    };

    return (
      <div className="homepage-background">
        <div className="weekday-titles">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
        </div>
        <div className="weekday-columns">
          <div className="monday">
            <h2 className="column-back-shadow" id="M">
              M
            </h2>
            <ul className="hours-available">
              {hours.map(hour => (
                <div
                  workflowpos="M"
                  timeslot={hour.rawHour}
                  key={`M/${hour.rawHour}`}
                >
                  <HourSlot
                    className="hourslot"
                    workflowpos="M"
                    timeslot={hour.rawHour}
                  >
                    <div className="hoursdisplay">
                      {hour.hour}{hour.timeOfDay}
                    </div>
                    {task('M', hour.rawHour)}
                  </HourSlot>
                </div>
              ))}
            </ul>
          </div>
          <div className="tuesday">
            <h2 className="column-back-shadow" id="T">
              T
            </h2>
            <ul className="hours-available">
              {hours.map(hour => (
                <div
                  workflowpos="T"
                  timeslot={hour.rawHour}
                  key={`T/${hour.rawHour}`}
                >
                  <HourSlot
                    className="hourslot"
                    workflowpos="T"
                    timeslot={hour.rawHour}
                  >
                    <div className="hoursdisplay">
                      {hour.hour}{hour.timeOfDay}
                    </div>
                    {task('T', hour.rawHour)}
                  </HourSlot>
                </div>
              ))}
            </ul>
          </div>
          <div className="wednesday">
            <h2 className="column-back-shadow" id="W">
              W
            </h2>
            <ul className="hours-available">
              {hours.map(hour => (
                <div
                  workflowpos="W"
                  timeslot={hour.rawHour}
                  key={`W/${hour.rawHour}`}
                >
                  <HourSlot
                    className="hourslot"
                    workflowpos="W"
                    timeslot={hour.rawHour}
                  >
                    <div className="hoursdisplay">
                      {hour.hour}{hour.timeOfDay}
                    </div>
                    {task('W', hour.rawHour)}
                  </HourSlot>
                </div>
              ))}
            </ul>
          </div>
          <div className="thursday">
            <h2 className="column-back-shadow" id="Th">
              Th
            </h2>
            <ul className="hours-available">
              {hours.map(hour => (
                <div
                  workflowpos="TH"
                  timeslot={hour.rawHour}
                  key={`TH/${hour.rawHour}`}
                >
                  <HourSlot
                    className="hourslot"
                    workflowpos="TH"
                    timeslot={hour.rawHour}
                  >
                    <div className="hoursdisplay">
                      {hour.hour}{hour.timeOfDay}
                    </div>
                    {task('TH', hour.rawHour)}
                  </HourSlot>
                </div>
              ))}
            </ul>
          </div>
          <div className="friday">
            <h2 className="column-back-shadow" id="F">
              F
            </h2>
            <ul className="hours-available">
              {hours.map(hour => (
                <div
                  workflowpos="F"
                  timeslot={hour.rawHour}
                  key={`F/${hour.rawHour}`}
                >
                  <HourSlot
                    className="hourslot"
                    workflowpos="F"
                    timeslot={hour.rawHour}
                  >
                    <div className="hoursdisplay">
                      {hour.hour}{hour.timeOfDay}
                    </div>
                    {task('F', hour.rawHour)}
                  </HourSlot>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <LeftSideBarContainer moveTask={this.moveTask}/>
        <RightSideBarContainer moveTask={this.moveTask} />
        <BottomBarContainer moveTask={this.moveTask} hours={hours} task={task} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(HomePage);