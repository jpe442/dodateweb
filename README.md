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
- [Challenges](#challenges)
  - [`convertToSync()`](#convert): syncing a todo as an `event` to Google Calendar API
---

[//]: # (Brief explanation of what the app is and does)
## <a name="intro"></a> Do &#10150; Doing &#10150; Done
---

DoDate is a Kanban inspired todo productivity solution whereby users create unscheduled todos in a list (do...), distribute them accross a one-week calendar (doing...), and finally mark them as complete - moving them off the calendar to another list to review, reuse, or delete later (done). Utilizing the latest frontend technologies - *Redux, ReactJS, React Native, React DnD, and Material UI* - DoDate epidomizes the modern single-page web application.
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

- React components are arranged and interelated according to [FLUX](https://facebook.github.io/flux/) architecture using [Redux](https://github.com/reactjs/redux/blob/master/README.md) to enforce a unidirectional flow of information ensuring that the database store is updated before a database-related change in frontend state is processed. This way, backend data and frontend state stay in sync. 

&#9733; React DnD

- [React DnD (Drag and Drop)](https://github.com/react-dnd/react-dnd) module integration preserves the Redux loop so users drag todos through the UI without the possibility of representing frontend state inconsistent with the backend database.

&#9733; Material UI

- Customized prestyled [Material UI](http://www.material-ui.com/#/) React components provide many familiar industry-standard UI/UX styling features created and proliferated by [Google](https://www.google.com).

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
 
 - With the parameters stored, when the user clicks **Sync as Google Calendar Event**, an `event` JSON object that Google Calendar API expects is constructed using an algorithm, [`convertToSync()`](#challenges) that takes the todo information in conjunction with the current time and returns an `event` object compatible with Google Calendar API.
 
 - The event object and the stored authorization parameters in `localStorage` are then used to construct and send the `POST` `event` request to Google Calendar API.
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
---

DoDate's central focus is the upcoming seven days. As a result, DoDate's database does not currently keep track of the date of todos. Google Calendar is preferred for longer term planning. One desired aspect of functionality is syncing a todo to Google Calendar API as an event object. Constructing requires ISO formatted dateTime start time and end time strings. However, because todos do not have an associated date, the intended date for the two dateTime strings must be inferred using only the current date and the day of the todo being synced.

[//]: # (Code snippets that show off your best code)

<a name="convert"></a>

`convertToSync()` solves this problem by first comparing the todo day of the week to the current day of the week. Since DoDate is only concerned with the next seven days, it can be determined the intended date of a todo with simple math and use of JavaScripts `Date` object.

First, the day of the today, `todoDay`, is figured using a simple converter. This makes the day of the week comparable as an integer. Then other constants for the current day/date and the todo start time, as well as variables to be further determined, are declared.

````javascript

export const convertToSync = (todo) => {
  
  let converter = { 'M': 1, 'T': 2, 'W': 3, 'TH': 4, 
                      'F': 5, 'ST': 6, 'SN': 7 }

  const todoDay = converter[todo.workflow_pos]

  const dateTimeNow = new Date();
  const dayNow = dateTimeNow.getDay();
  const dateNow = dateTimeNow.getDate();
  const todoStart = todo.time_slot;

  const dateTimeNowJSON = dateTimeNow.toJSON();

  let todoDate;
  let newTodoDate = Date.new();

  let newStartDateTime;
  let newEndDateTime;
  let startString;
  let endString;

````
Now we compare the current day of the week, `dayNow` with the day of the week of the todo, `todoDay`. If the day of the week is the same for both (e.g. Tuesday), then the date of the event, `todoDate`, must be the current date, `dayNow` (e.g. Tuesday the 21st).

If `dayNow` (e.g. Tuesday) is earlier in the week than `todoDay` (e.g. Thursday), then `todoDate`is the current date (21st), `dateNow`, plus the difference of the two days (21 + (4 - 2), or 23).

Since we cannot schedule in the past, if `todoDay` (e.g. Monday) is earlier in the week than the current day (Tuesday), then `todoDate` is the next date with of that day (i.e. the next Monday), which can be determined by taking the `dateNow` (21) plus a week of days minus the difference of the two days (21 + 7 - (2 - 1), or 27). 

````javascript

  if (dayNow === todoDay) {

    todoDate = dateNow

  } else if (dayNow < todoDay) {

    todoDate = (todoDay - dayNow) + dateNow

  } else if (dayNow > todoDay) {

    todoDate = dateNow + 7 - (dayNow - todoDay)

  }

````

The newly determined date, `todoDate`, is set as the date for a new `Date` object, which is in turn used to create two other `Date` objects with the same date. One of these is set to the start time of the todo, `todoStart`, the other to the end time. The `toJSON()` function of the `Date` object is then used to pull the ISO compatible date time strings needed to create the Google `event`.

````javascript

  newTodoDate.setDate(todoDate);

  // construct start dateTime string

  newStartDateTime = new Date(newTodoDate.toJSON())
  newStartDateTime.setHours(todoStart, 0, 0)
  startString = newStartDateTime.toJSON();

  // construct end dateTime string

  newEndDateTime = new Date(newStartDateTime.toJSON());
  newEndDateTime.setHours(todoStart + 1, 0, 0);
  endString = newEndDateTime.toJSON();

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
````
<br>

[Back to Table of Contents](#contents)
