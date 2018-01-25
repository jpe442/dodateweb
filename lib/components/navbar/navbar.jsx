import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/Dialog';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Login from './login_form';
import TodoForm from '../tasks/create_task_form'
import EditTodoForm from '../tasks/edit_task_form'

class NavBar extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
          open: false,
        };

        this.openLoginModal = this.openLoginModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        // this.handleSync = this.handleSync.bind(this);
    }

    // create event
    // step 1 - convert current system time to note date and day of the week
    //      i.e. an array of ["M", 1, 22] or record as seperate variables, etc...
    // step 2 - compare current day of the week with day to schedule
    //      if greater than current day take the current date (22) and add 
    //      the difference between the two days (W - M = 2), i.e. 24
    // step 3 - now take the start time of the todo (suppose 11a) and add the
    // duration in hours (suppose 1) to the raw hour number(0-24) (suppose 13).
    // now we have both start and end dateTime informations
    // step 4 - create the dateTime strings from the information gathered from 
    // steps 1-3.
    //      event = { "end": {"dateTime": "2018-01-23T15:00:45.797Z"}, "start": {"dateTime": "2018-01-23T14:00:45.797Z"}, "summary": task}

   

    openLoginModal() {
      this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleEdit() {
        this.props.openEdit(this.props.todoInEdit)
    }

    render() {

        var todo = this.props.todoInEdit;

        console.log("finally changed again5")
        var queryString = location.hash.substring(1);
        // Parse query string to see if page request is coming from OAuth 2.0 server.
        var params = {};

        var regex = /([^&=]+)=([^&]*)/g, m;

        while (m = regex.exec(queryString)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            // Try to exchange the param values for an access token.
            exchangeOAuth2Token(params);
        }
        
        function dayToNumConvert(workflow_pos) {
            let converter = { 'M': 1, 'T': 2, 'W': 3, 'TH': 4, 'F': 5, 'ST': 6, 'SN': 7 }
            return converter[workflow_pos]
        }

        function syncEvent(todo) {
            console.log(todo)

    
            const dateTimeNow = new Date(); // i.e. new Date object

            const dayNow = dateTimeNow.getDay(); // i.e. 2 for 'M'

            const dateNow = dateTimeNow.getDate(); // i.e. 22

            const todoDay = dayToNumConvert(todo.workflow_pos); // 'M'

            const todoStart = todo.time_slot // 11
            console.log(todo.time_slot)
            console.log(todoStart)


            if (dayNow === todoDay) {
                // create start/end dateTime using date/timezone from current day and 
                // start-time/calculated endtime from todo
                let newStartDateTime = new Date();
                newStartDateTime.setHours(todoStart, 0, 0)
                var startString = newStartDateTime.toJSON();
                let newEndDateTime = new Date();
                newEndDateTime.setHours(todoStart + 1, 0, 0)
                var endString = newEndDateTime.toJSON();
              
            } else if (dayNow < todoDay) {
                // get the difference as an integer by subtracting numerical dayNow
                // from numerical todoDay
                let dateTimeNowJSON = dateTimeNow.toJSON();
                let dateNow = dateTimeNow.getDate();
                // add the difference from the todo day and current day to create todo date
                let todoDate = dateNow + (todoDay - dayNow)


                let newTodoDate = new Date(dateTimeNowJSON);
                newTodoDate.setDate(todoDate);

                let newStartDateTime = new Date(newTodoDate.toJSON())
                newStartDateTime.setHours(todo.time_slot, 0, 0)
                var startString = newStartDateTime.toJSON();

                let newEndDateTime = new Date(newStartDateTime.toJSON());
                newEndDateTime.setHours(todo.time_slot + 1, 0, 0);
                var endString = newEndDateTime.toJSON();

            } else if (dayNow > todoDay) {
                 // create DateTime object using newSyncDate/Start
                // create DateTime object using newSyncDate/End
                // pull the ISO string conversions from each object
                // use todo.task and dateTime strings to create event object
                // send event object to Google Calendar API

                // get the difference as an integer by subtracting numerical dayNow
                // from numerical todoDay
                let dateTimeNowJSON = dateTimeNow.toJSON();
                let dateNow = dateTimeNow.getDate();
                // add the difference from the todo day and current day to create todo date
                let todoDate = dateNow + 7 - (dayNow - todoDay)


                let newTodoDate = new Date(dateTimeNowJSON);
                newTodoDate.setDate(todoDate);

                let newStartDateTime = new Date(newTodoDate.toJSON())
                newStartDateTime.setHours(todo.time_slot, 0, 0)
                var startString = newStartDateTime.toJSON();

                let newEndDateTime = new Date(newStartDateTime.toJSON());
                newEndDateTime.setHours(todo.time_slot + 1, 0, 0);
                var endString = newEndDateTime.toJSON();
            }

            let event = {'start': {'dateTime': startString}, 'end': {'dateTime': endString}, 'summary': todo.task}
            return event
        }   

        function handleSync() {
                
            var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
            if (params && params['access_token']) {
                var xhr = new XMLHttpRequest();
                console.log("in handleSync about to POST")
                xhr.open('POST',
                    'https://www.googleapis.com/calendar/v3/calendars/primary/events?'
                    + 'access_token=' + params['access_token'], );
                xhr.onreadystatechange = function (e) {
                    console.log("just after onreadystatechange")
                    console.log(xhr.response);
                    localStorage.removeItem('oauth2-test-params')
                };
                xhr.setRequestHeader("Content-Type", "application/json")
                console.log(todo)
                console.log(syncEvent(todo))
                xhr.send(JSON.stringify(syncEvent(todo)));
            } else {
                oauth2SignIn();
            }
        }
        
        function oauth2SignIn() {
        // Google's OAuth 2.0 endpoint for requesting an access token
            let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
            let form = document.createElement('form');
            form.setAttribute('method', 'GET'); // Send as a GET request.
            form.setAttribute('action', oauth2Endpoint);

        // Parameters to pass to OAuth 2.0 endpoint.
            let params = {
                'client_id': '591847328765-855vukh94icl3h11qkiqmt0j4lvg3auk.apps.googleusercontent.com',
                'redirect_uri': 'http://localhost:8000/',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/calendar',
                'include_granted_scopes': 'true',
                'state': 'sync',
                'prompt': 'select_account'
            };

        // Add form parameters as hidden input values.
            for (var p in params) {
                var input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', p);
                input.setAttribute('value', params[p]);
                form.appendChild(input);
            }

        // Add form to page and submit it to open the OAuth 2.0 endpoint.
            document.body.appendChild(form);
            form.submit();
        }

        /* Validate the access token received on the query string. */
        function exchangeOAuth2Token(params) {
            var oauth2Endpoint = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
            if (params['access_token']) {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', oauth2Endpoint + '?access_token=' + params['access_token']);
                xhr.onreadystatechange = function (e) {
                    var response = JSON.parse(xhr.response);
                    // Verify that the 'aud' property in the response matches YOUR_CLIENT_ID.
                    if (xhr.readyState == 4 &&
                        xhr.status == 200 &&
                        response['aud'] &&
                        response['aud'] == '591847328765-855vukh94icl3h11qkiqmt0j4lvg3auk.apps.googleusercontent.com') {
                        params['scope'] = response['scope'];
                        localStorage.setItem('oauth2-test-params', JSON.stringify(params));
                        // if (params['state'] == 'sync') {
                        //     handleSync();
                        // }
                    } else if (xhr.readyState == 4) {
                        console.log('There was an error processing the token, another ' +
                            'response was returned, or the token was invalid.')
                    }
                };
                xhr.send(null);
            }
        }


        const { currentUser, logout, login} = this.props;
        const taskSelect = this.props.todoInEdit ? (<div>{this.props.todoInEdit.task}</div>) : (<div>Todo In Focus</div>) 
        const taskShow = <div id="current-task-show"><div>{taskSelect}</div></div>
        const AppNavBar = currentUser ? (
            <div className="nav-base">
            <AppBar
                onLeftIconButtonClick={handleSync}
                // children={taskShow}
                className="AppNavBar"
                title={<span>DoDate</span>}
                iconElementRight={
                    <RaisedButton
                        className="logout-btn"
                        label="Logout"
                        secondary={true}
                        onClick={logout}
                    />
                }
            />
            <Dialog
                title="Create New Todo"
                modal={false}
                overlayStyle={{display: 'none'}}
                style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 1500,
                }}

                bodyStyle={{
                    height: '100%'
                }}

                titleStyle={{
                    paddingTop: '3%',
                    padding: '1%',
                    fontSize: '80%',
                    position: 'relative',
                    left: '7%',
                    top: '20%'
                }}

                onRequestClose={this.props.toggleTodoCreateModal}
                open={this.props.openTodoCreateModal}

            >
                <TodoForm
                    ownProps = {this.props.ownProps}
                    currentUser={this.props.currentUser}
                    createTodo={this.props.createTodo}
                    toggleTodoCreateModal={this.props.toggleTodoCreateModal}
                />
            </Dialog>

                <Dialog
                    title="Edit Todo"
                    modal={false}
                    // overlayStyle={{ display: 'none' }}
                    style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 1500,
                    }}

                    bodyStyle={{
                        height: '100%'
                    }}

                    titleStyle={{
                        paddingTop: '3%',
                        padding: '1%',
                        fontSize: '80%',
                        position: 'relative',
                        left: '7%',
                        top: '20%'
                    }}

                    onRequestClose={this.props.toggleTodoEditModal}
                    open={this.props.openTodoEditModal}

                >
                <EditTodoForm
                    todo={this.props.todoInEdit}
                    currentUser={this.props.currentUser}
                    updateTodo={this.props.updateTodo}
                    deleteTodo={this.props.deleteTodo}
                    openEdit={this.props.openEdit} 
                    toggleTodoEditModal={this.props.toggleTodoEditModal}
                    />
                </Dialog>
            </div>
        ) : (
            <div>
                <AppBar
                    className="AppNavBar"
                    title={<span>DoDate</span>}
                    showMenuIconButton={false}
                    iconElementRight={ 

                        <RaisedButton
                            className="logout-btn"
                            label="Log In"
                            secondary={true}
                            onClick={this.openLoginModal}
                    />
                    }
                />
                <Dialog
                    title="Login to DoDate"
                    modal={true}
                    onRequestClose={this.handleClose}
                    open={this.state.open}
                    style={{height: '50%'}}
                    titleStyle={{
                        paddingBottom: '1%',
                        fontSize: '120%',
                        position: 'absolute',
                        left: '35%',
                        top: '7%'
                    }}
                >
                    <Login 
                        ownProps={this.props.ownProps}
                        autherrors={this.props.autherrors}
                        login={login}
                        handleClose={this.handleClose}
                        clearSessionErrors={this.props.clearSessionErrors}
                    />
                    
                </Dialog>
               
            </div>
        );
        return (
          AppNavBar
        );
    }
}

export default NavBar;