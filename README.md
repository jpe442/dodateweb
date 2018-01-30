# DoDate
#### A Productivity Experience
[![NuGet](https://img.shields.io/badge/Single%20Page%20Web%20Application-100%25-ff6b4.svg?colorB=ffd700)]()
---
---
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

[//]: # (Link to live site)
##### Experience DoDate live here at [dodate.io](http://www.dodate.io)
---
## <a name="stack"></a>

[![Travis](https://img.shields.io/badge/React-JS-blue.svg?colorB=00d9ff)]()
[![Wercker](https://img.shields.io/badge/React-Native-brightgreen.svg?colorB=f5f5f5)]()
[![Wercker](https://img.shields.io/badge/React-DnD-yellow.svg?colorB=0071d8)]()
[![AppVeyor tests branch](https://img.shields.io/badge/Redux-enabled-orange.svg?colorB=8470ff)]()
[![Wercker](https://img.shields.io/badge/JavaScript-ES6-yellow.svg?colorB=fbde35)]()
[![Wercker](https://img.shields.io/badge/Ruby-Rails-red.svg)]()
[![Wercker](https://img.shields.io/badge/Postgre-SQL-red.svg?colorB=326392)]()
[![Wercker](https://img.shields.io/badge/HTML-5-red.svg?colorB=f16529)]()
[![Wercker](https://img.shields.io/badge/CSS-3-red.svg?colorB=52a7db)]()
[![Wercker](https://img.shields.io/badge/Material-UI-red.svg?colorB=01bcd4)]()

##### React JS/Redux | React Native/Redux | React-DnD | JavaScript | PostgresSQL | Ruby on Rails | HTML5 | CSS3 | Material-UI
---
## <a name="contents"></a>Contents
- [Technology Stack](#stack)
- [Do, Doing, Done...](#intro)
- [Technologies: From Front to Back](#tech)
  - [Frontends: Web & Mobile](#frontends)
    - [Web](#web)
    - [Mobile](#mobile)
  - [Backend Server Side](#backend)
- [Key Features](#keyfeatures)
  - [DoDate's Drag/Drop Redux Loop using React DnD](#droploop)
  - [DoDate's Google Calendar Event Sync Cycle](#sync)
  - [DoDate's Extreme Single Page UI](#ui)

---

[//]: # (Brief explanation of what the app is and does)
## <a name="intro"></a> Do &#10150; Doing &#10150; Done
---

DoDate is a Kanban-inspired todo productivity solution whereby users create unscheduled todos in a list (do...), distribute them accross a one-week calendar (doing...), and finally mark them as complete - moving them off the calendar to another list to review, reuse, or delete later (done). Utilizing the latest frontend technologies - *Redux, ReactJS, React Native, React DnD, and Material UI* - DoDate epidomizes the modern single page web application.
<br>

[Back to Table of Contents](#contents)

---
[//]: # (Discussion of technologies used)

## <a name="tech"></a>Technologies from Front to Back
---
### <a name="frontends"></a>Frontends: Web & Mobile 
---
#### <a name="web"></a>Web
  
DoDate's primary frontend is built in [ReactJS](https://reactjs.org/) using [JavaScript](https://www.javascript.com/) [ES6](http://es6-features.org/#Constants), [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), and [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3). DoDate leverages the [React-Redux](https://github.com/reactjs/redux/blob/master/README.md) and [React DnD drag and drop](https://github.com/react-dnd/react-dnd) module dependencies to implement [FLUX's front-to-back-to-front data-flow architecture](https://facebook.github.io/flux/) so that frontend state stays consistent with backend data. Custom Material UI components complete the modern UI/UX feel with industry-standard ergonomic features.

&#9733; React with Redux

- React components are arranged and interelated according to [FLUX](https://facebook.github.io/flux/) architecture using [Redux](https://github.com/reactjs/redux/blob/master/README.md) enforce a unidirectional flow of information ensuring that backend data stays in sync with the frontend state of the client application at all times. 

&#9733; React DnD

- [React DnD (Drag and Drop)](https://github.com/react-dnd/react-dnd) module integration preserves the Redux loop so users drag todos through the UI without the possibility of representing frontend state inconsistent with the backend database.

&#9733; Material UI

- Customized prestyled [Material UI](http://www.material-ui.com/#/) React components provide many familiar industry-standard UI/UX styling features created and proliferated by Google.

#### <a name="mobile"></a>Mobile 

[![Wercker](https://img.shields.io/badge/Coming-Soon-yellowgreen.svg)]()

- This feature is still being developed and we hope to make a version available soon. 

- The frontend is built in [React Native](https://facebook.github.io/react-native/) using [Redux](https://github.com/reactjs/react-redux) module for unidirectional FLUX information architecture and [React Native Material UI components](https://github.com/xotahal/react-native-material-ui) for modern styling consistent with web application.
<br>

[Back to Table of Contents](#contents)

---
### <a name="backend"></a> Backend Server Side
---
Independently hosted backend serves data for both the web and mobile applications. Ruby on Rails application server routes authorized incoming requests to lightweight [PostgreSQL](https://www.postgresql.org/) database and returns customized JSON data constructed using the Ruby's [jbuilder gem](https://rubygems.org/gems/jbuilder) for optimized frontend stateshape.

&#9733; Ruby on Rails

- Restful routes and server-side authorization cycle managed by Rails via Ruby's [BCrypt gem](https://rubygems.org/gems/bcrypt/versions/3.1.11) for salting users' passwords and securely storing them in the database alongside Ruby's [SecureRandom module](http://ruby-doc.org/stdlib-1.9.3/libdoc/securerandom/rdoc/SecureRandom.html) for secure session token management.

- Rack middleware configured to accept CORS requests from frontend clients' AJAX requests using [Rack CORS gem](https://rubygems.org/gems/rack-cors).

- State shape normalized using [jbuilder gem](https://rubygems.org/gems/jbuilder) to optimal frontend stateshape from JSON response.

&#9733; PostgreSQL

- Two tables, one consisting of user data, the other todo data, compose a simple [PostgreSQL](https://www.postgresql.org/) database indexed both by users and by todos-by-user for less costly SQL querying.
<br>

[Back to Table of Contents](#contents)

---

[//]: # (Deep delving into 2-3 features that show off your technical abilities and mastery of concepts/language)
## <a name="keyfeatures"></a>Key Features
---
### <a name="droploop"></a>&#8734;  DoDate's Drag/Drop Redux Loop using React DnD
---
- A user dragging a todo sees a transluscent screenshot of the todo component being moved throughout the UI and not the component itself. The actual todo component stays in place in the DOM at this point. 

- A user attempting to drop a todo on the client-side frontend initiates an action that, if completed, changes the state of the frontend such that the backend database would need to be updated to stay consistent with the new frontend state. 

- For this reason, when the drop action is initiated by the user, an AJAX call requests that the backend update be attempted first, while the drop action stalls for the return of a successful promise from the AJAX request.

- After the backend data is updated successfully and this information is processed by the frontend reducer, only then is the relevant elements of DOM refreshed and the drag/drop action successfully complete.

- If the backend update in not successful, the drop action fails to complete and the todo component stays in its original, dragged-from, location in the DOM.

- So, whenever the todo moves its location on the calendar, its time data is guaranteed to be up-to-date on the backend. The user safely logs out without losing precious planning work.
<br>

[Back to Table of Contents](#contents)

---
### <a name="sync"></a>&#9729;  DoDate's Google Calendar Event Sync Cycle
---
- A user clicks the **Sync as Google Calendar Event** cloud-button in the *Edit Todo* modal, which triggers an AJAX request for a Google Calendar API access token and initiates Google's OAuth 2.0 authentication/authorization cycle.

  *Granting DoDate Authorization to Access Users' Google Calendar*

  - [Google's OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2) cycle begins with the AJAX request for an access token for the client application to access the user's Google Calendar data.
  
  - As a result, the user is redirected to the Google OAuth 2.0 API to authorize consent for DoDate to access to the user's Google Calendar data.
  
  - Once signed in to Google successfully, the client is then redirected back to DoDate with an access token embedded in the redirect URI.
  
  - The access token is extracted, stored as parameters, then finally validated (tokens expire after 3600 seconds by default) using another AJAX request to Google OAuth 2.0 API.
  
  - Given a successful validation, the authorization parameters are stored in `localStorage` cache to be used to in making a `POST` `event` AJAX request to Google Calendar API.
 
 - With the parameters stored, when the user clicks **Sync as Google Calendar Event**, an `event` JSON object that Google Calendar API expects is constructed using an algorithm that takes the todo information in conjunction with the current time and returns an `event` object compatible with Google Calendar API.
 
 - The event object and the stored authorization parameters `localStorage` are then used to construct and send the `POST` `event` request to Google Calendar API.
<br>

[Back to Table of Contents](#contents)

---
### <a name="ui"></a> &#128187;  DoDate's Extreme Single Page UI
---

DoDate renders only one page after logging in, but this single page leverages pop-out hidden menu components to extend the workspace without redirecting or fully rerending during primary workflow.

#### Do...
- The *Left Menu Drawer* pops open and extends to the right as the cursor hovers over the slim hidden HTML element running up the left side of the *Workweek Calendar*. 

- Clicking the Material **+** floating action button at the top of the left menu drawer calls up the *Create New Todo* Material dialog form to create a new unscheduled todo.

- All unscheduled todos are first rendered in the *Left Menu Drawer* component below the **+** button.

#### Doing...
- From the left pop-out menu drawer unscheduled todos are distributed across the Monday-Friday *Workweek Calendar* by dragging and dropping them in the desired time slot(s). 

- Dragging a todo over the **Weekend** button on the bottom of the workweek calendar triggers the bottom menu drawer to pop open from the bottom of the screen, exposing the weekend calendar; dragging a todo from the weekend calendar over the **Drag to Workweek** button closes the bottom drawer so the todo can be placed upon the workweek calendar. 

- Double cliking a todo calls up its *Edit Todo* dialog form for editing the todo.

#### Done.
- Clicking the check completion box	&#9744; of the todo component seemlessly sends the the todo to the *Right Menu Drawer*.

- The *Right Menu Drawer* pops open and extends to the left as the cursor hovers over the slim hidden HTML element running up the right side of the workweek calendar.
<br>

[Back to Table of Contents](#contents)

---

[//]: # (Discuss challenges faced and my solutions to those challenges)

## <a name="challenges"></a>Development Challenges
---
DoDate's central focus is the upcoming seven days. As a result, DoDate's database does not currently keep track of the *date* of todos. Google Calendar is preferred for longer term planning at this point. One sophisticated aspect of functionality is syncing a todo to Google Calendar API as an event. However, because todos do not have an associated date, the intended date 

[//]: # (Code snippets that show off your best code)

```javascript

export const convertToSync = (todo) => {
  
  // create simple helper method to convert from DoDate workflow_pos (e.g. 'M') to Date-
  // object-compatible integer for representing day (i.e. 1)

  const dayToNumConvert = (workflow_pos) => {
    let converter = { 'M': 1, 'T': 2, 'W': 3, 'TH': 4, 'F': 5, 'ST': 6, 'SN': 7 }

    return converter[workflow_pos]
  }
  
  // delcare constants

  const dateTimeNow = new Date(); 
  const dayNow = dateTimeNow.getDay();
  const dateNow = dateTimeNow.getDate(); 
  const todoDay = dayToNumConvert(todo.workflow_pos); 
  const todoStart = todo.time_slot; 

  const dateTimeNowJSON = dateTimeNow.toJSON(); 

  // declare variables

  let todoDate; 
  let newTodoDate = Date.new(); 

  let newStartDateTime; 
  let newEndDateTime; 
  let startString; 
  let endString; 
  
  if (dayNow === todoDay) {
  
    // since the day of the todo is the current day,
      // the date of the Google Cal event must be today's date
      
    todoDate = dateNow
  } else if (dayNow < todoDay) {
  
    // since the current day is prior in the week than the current day (e.g. Thursday, Saturday),
      // the event day must be the next matching weekday day (e.g. Saturday) and figure the event date
      // by adding the date now to the difference of the current day subtracted from the todo day to the date now
      
    todoDate = (todoDay - dayNow) + dateNow
  } else if (dayNow > todoDay) {
  
    // since the day of the todo is prior in the week than the current day (e.g. Monday, Tuesday) and
    // we can assume a user is not trying to schedule an event in the past
      // the date of the event must be the next matching weekday date (e.g. Monday the 22)
      // so we add 7 to the current date, then subtract the difference of the todo day subtracted from the current 
      // day ((2-1 = 1 for Tuesday - Monday) to get the numerical date of the todo
      
    todoDate = dateNow + 7 - (dayNow - todoDay)
  }
  
  // set new TodoDate object to resulting todoDate from conditional logic above
  
  newTodoDate.setDate(todoDate);
    
  // construct start dateTime string
  
  newStartDateTime = new Date(newTodoDate.toJSON())
  newStartDateTime.setHours(todo.time_slot, 0, 0)
  startString = newStartDateTime.toJSON();
    
  // construct end dateTime string
  
  newEndDateTime = new Date(newStartDateTime.toJSON());
  newEndDateTime.setHours(todo.time_slot + 1, 0, 0);
  endString = newEndDateTime.toJSON();
  
  // use the string to construct the event object for Google Cal event insertion using the todo task as the summary attribute
  
  let event = { 
            'start': { 
                  'dateTime': startString
                  }, 
            'end': { 
                  'dateTime': endString
                  }, 
            'summary': todo.task 
          }

  return event
}
```
   

