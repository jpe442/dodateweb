import React from 'react';
import { convertToSync } from './convert_to_sync';
import IconButton from 'material-ui/IconButton';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';

export default class SyncButton extends React.Component {
  constructor(props) {
    super(props);
  }

  /* Validate the access token received on the query string. */
  exchangeOAuth2Token(params) {
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

  oauth2SignIn() {
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

  render() {
    var todo = this.props.todo;
    var smallIcon = {
      width: 36,
      height: 36,
    }
    var queryString = location.hash.substring(1);
    // Parse query string to see if page request is coming from OAuth 2.0 server.
    var params = {};

    var regex = /([^&=]+)=([^&]*)/g, m;

    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      // Try to exchange the param values for an access token.
      exchangeOAuth2Token(params);
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
            console.log("just in onreadystatechange")
          console.log(xhr.response);
          localStorage.removeItem('oauth2-test-params')
        };
        xhr.setRequestHeader("Content-Type", "application/json")
        console.log(todo)
        console.log(convertToSync(todo))
        xhr.send(JSON.stringify(convertToSync(todo)));
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
          console.log(xhr.response)
          var response = JSON.parse(xhr.response);
          console.log(response)
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


    return (
    <div>   
      <IconButton
        tooltip="Sync As Google Calendar Event"
        tooltipPosition="top-center"
        onClick={handleSync}
        iconStyle={smallIcon}
        touch={false}

        style={{
          position: 'absolute',
          display: 'flex',
          justifyContents: 'center',
          right: '4%',
          bottom: '40%',
      }}
    >
      <UploadIcon />
    </IconButton>
    </div>)

  }


}