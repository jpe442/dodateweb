import React from 'react';
import TaskItem from './task_item';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("componentDidMounted");
    }

    render () {
        // const books = this.props.books;
        return (
            <div >
                <h1>STUFF</h1>
            </div>
        );
    }
}

export default HomePage;