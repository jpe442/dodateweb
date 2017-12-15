import React from 'react';
import HomeTaskItem from './home_task_item';
import LeftSideBarContainer from '../do_left_container/left_sidebar_container';

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
                    <div className="monday">Monday</div>
                    <div className="tuesday">Tuesday</div>
                    <div className="wednesday">Wednesday</div>
                    <div className="thursday">Thursday</div>
                    <div className="friday">Friday</div>
                </div>
                <LeftSideBarContainer />
            </div>
        );
    }
}

export default HomePage;