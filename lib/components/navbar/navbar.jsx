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
    }

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

        /*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
        const oauthSignIn = () => {
            // Google's OAuth 2.0 endpoint for requesting an access token
            let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

            // Create <form> element to submit parameters to OAuth 2.0 endpoint.
            let form = document.createElement('form');
            form.setAttribute('method', 'GET'); // Send as a GET request.
            form.setAttribute('action', oauth2Endpoint);

            // Parameters to pass to OAuth 2.0 endpoint.
            let params = {
                'client_id': '591847328765-855vukh94icl3h11qkiqmt0j4lvg3auk.apps.googleusercontent.com',
                'redirect_uri': 'https://jpe442.github.io/dodateweb',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/calendar	',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'
            };

            console.log(params['redirect_uri'])
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

        const { currentUser, logout, login} = this.props;
        const taskSelect = this.props.todoInEdit ? (<div>{this.props.todoInEdit.task}</div>) : (<div>Todo In Focus</div>) 
        const taskShow = <div id="current-task-show"><div>{taskSelect}</div></div>
        const AppNavBar = currentUser ? (
            <div className="nav-base">
            <AppBar
                onLeftIconButtonClick={oauthSignIn}
                children={taskShow}
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