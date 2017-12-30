import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import TodoItem from '../tasks/todoitem'
import HourSlot from '../tasks/hourslot'
import Checkbox from 'material-ui/Checkbox';
import LeftSideBarContainer from '../do_left_container/left_sidebar_container';
import RightSideBarContainer from '../done_right_container/right_sidebar_container';
import BottomBarContainer from '../bottom_bar/bottom_bar_container';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import 

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.moveTask = this.moveTask.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMounted");
    }

    moveTask(itemId, workflowPos, timeSlot) {
        let moveTodo = {
                        id: itemId,
                        workflow_pos: workflowPos,
                        time_slot: timeSlot,
                        tag: this.props.todos[itemId].tag,
                        notes: this.props.todos[itemId].notes,
                        etc: this.props.todos[itemId].etc,
                        user_id: this.props.currentUser.id
                        }

        this.props.updateTodo(this.props.currentUser.id, moveTodo)
    }

    render () {
        let todosVals = Object.values(this.props.todos)
        let todosMonday = todosVals.filter(todo => todo.workflow_pos === 'M')
        let todosTuesday = todosVals.filter(todo => todo.workflow_pos === 'T')
        let todosWednesday = todosVals.filter(todo => todo.workflow_pos === 'W')
        let todosThursday = todosVals.filter(todo => todo.workflow_pos === 'TH')
        let todosFriday = todosVals.filter(todo => todo.workflow_pos === 'F')

        // let todoItem = document.getElementsByClassName('todo-item')
        // $(function () {
        //     $(todoItem).draggable();
        // });

        const hours = []
        for (let i = 8; i < 20; i++) {
            if (i > 12) {
                let hourNum = i - 12
                hours.push({ hour: hourNum, timeOfDay: "p" })
            }else{
                if (i === 12) {
                hours.push({ hour: i, timeOfDay: "p" })
                }else{
                hours.push({ hour: i, timeOfDay: "a" })
                }
            }
        }

        const task = (workflowPos, timeSlot) => {
            let todosToday = todosVals.filter(todo => todo.workflow_pos === workflowPos)
            console.log(workflowPos)
            if (todosToday.some((todo) => (todo.time_slot === timeSlot))) {
                let todosNow = todosToday.filter(todo => (todo.time_slot === timeSlot))
                return (
                    todosNow.map(todo => 
                        <TodoItem
                            key={todo.key}
                            todo={todo}
                            moveTask={this.moveTask}
                            // style={{height: '100%'}}
                        />
                    )  
                )
            }
        }
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
                                    timeslot={hour.hour}
                                >
                                    <HourSlot
                                        className="hourslot"
                                        workflowpos="M"
                                        timeslot={hour.hour}>
                                        <div
                                        className="hoursdisplay"
                                        >{hour.hour}{hour.timeOfDay}</div>
                                        {task('M', hour.hour)}

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
                                    timeslot={hour.hour}
                                >
                                    <HourSlot
                                        className="hourslot"
                                        workflowpos="T"
                                        timeslot={hour.hour}>
                                        <div
                                        className="hoursdisplay"
                                        >{hour.hour}{hour.timeOfDay}</div>
                                        {task('T', hour.hour)}
                                        
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
                                    timeslot={hour.hour}
                                >
                                    <HourSlot
                                        className="hourslot"
                                        workflowpos="W"
                                        timeslot={hour.hour}>
                                        <div
                                        className="hoursdisplay"
                                        >{hour.hour}{hour.timeOfDay}</div>
                                        {task('W', hour.hour)}
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
                                    timeslot={hour.hour}
                                >
                                    <HourSlot
                                        className="hourslot"
                                        workflowpos="TH"
                                        timeslot={hour.hour}>
                                        <div
                                        className="hoursdisplay"
                                        >{hour.hour}{hour.timeOfDay}</div>
                                        {task('TH', hour.hour)}
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
                                    timeslot={hour.hour}
                                >
                                    <HourSlot
                                        className="hourslot"
                                        workflowpos="F"
                                        timeslot={hour.hour}>
                                        <div
                                        className="hoursdisplay"
                                        >{hour.hour}{hour.timeOfDay}</div>
                                        {task('F', hour.hour)}
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