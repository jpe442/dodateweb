import React from 'react';
import HomeTaskItem from './home_task_item';
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
        // const tasks = this.props.tasks;
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
                    <div className="monday">M</div>
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