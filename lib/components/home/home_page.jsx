import React from 'react';
import MenuItem from 'material-ui/MenuItem';
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
                        <h2 className="column-back-shadow">
                            M
                        </h2>
                        <div>{todosMonday.map(todo => (
                            <MenuItem
                                key={todo.id}
                            >
                                {todo.task}
                            </MenuItem>))}</div>
                    </div>
                    <div className="tuesday">T</div>
                    <div className="wednesday">W</div>
                    <div className="thursday">T</div>
                    <div className="friday">F</div>
                </div>
                <LeftSideBarContainer />
                <RightSideBarContainer />
                <BottomBarContainer />
            </div>
        );
    }
}

export default HomePage;