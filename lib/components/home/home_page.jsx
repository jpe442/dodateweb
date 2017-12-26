import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import TodoItem from '../tasks/todoitem'
import Checkbox from 'material-ui/Checkbox';
import LeftSideBarContainer from '../do_left_container/left_sidebar_container';
import RightSideBarContainer from '../done_right_container/right_sidebar_container';
import BottomBarContainer from '../bottom_bar/bottom_bar_container';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("componentDidMounted");
    }

    render () {
        let todosVals = Object.values(this.props.todos)
        let todosMonday = todosVals.filter(todo => todo.workflow_pos === 'M')
        let todosTuesday = todosVals.filter(todo => todo.workflow_pos === 'T')
        let todosWednesday = todosVals.filter(todo => todo.workflow_pos === 'W')
        let todosThursday = todosVals.filter(todo => todo.workflow_pos === 'TH')
        let todosFriday = todosVals.filter(todo => todo.workflow_pos === 'F')
        
        let todoItem = document.getElementsByClassName('todo-item')
        $(function () {
            $(todoItem).draggable();
        });
       
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
                        <ul className="menu-items">{todosMonday.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />))}
                        </ul>
                    </div>
                    <div className="tuesday">
                    <h2 className="column-back-shadow" id="T">
                            T
                        </h2>
                        <ul className="menu-items">{todosTuesday.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />))}
                        </ul>
                    </div>
                    <div className="wednesday">
                        <h2 className="column-back-shadow" id="W">
                            W
                        </h2>
                        <ul className="menu-items">{todosWednesday.map(todo => (
                           <TodoItem 
                           key={todo.id}
                           todo={todo}
                           />
                           ))}
                        </ul>
                    </div>
                    <div className="thursday">
                        <h2 className="column-back-shadow" id="Th">
                            Th
                        </h2>
                        <ul className="menu-items">{todosThursday.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />))}
                        </ul>
                    </div>
                    <div className="friday">
                        <h2 className="column-back-shadow" id="F">
                            F
                        </h2>
                        <ul className="menu-items">{todosFriday.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                            />))}
                        </ul>
                    </div>
                </div>
                <LeftSideBarContainer />
                <RightSideBarContainer />
                <BottomBarContainer />
            </div>
        );
    }
}

export default HomePage;