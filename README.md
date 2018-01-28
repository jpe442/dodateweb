# DoDate
#### A Productivity Experience
[![NuGet](https://img.shields.io/badge/Single%20Page%20Web%20Application-100%25-ff6b4.svg?colorB=ffd700)]()
---
---
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

[//]: # (Link to live site)
##### Experience DoDate live here at [dodate.io](https://jpe442.github.io/dodateweb/#/)
---
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

[//]: # (Brief explanation of what the app is and does)
## Do&#10150;Doing&#10150;Done

DoDate is a Kanban-inspired todo productivity solution whereby users create unscheduled todos in a list (do), distribute them accross a one-week calendar (doing), and finally mark them as complete to move them off the calendar to another list (done). Utilizing the latest frontend technologies - *Redux, ReactJS, React Native, React DnD, and Material UI* - DoDate epidomizes the modern single-page-app (SPA).

---
[//]: # (Discussion of technologies used)

## Technologies from Front to Back
---
### Frontends: Web & Mobile

#### Web
  
DoDate's primary frontend is built in ReactJS using JavaScript ES6, HTML5, and CSS3. DoDate leverages the React-Redux and React Drag and Drop module dependencies to foster FLUX's front-to-back-to-front data-flow architecture. Custom Material UI components complete the modern UI/UX with industry-standard ergonomic features.

&#9733;*React with Redux*&#9733;

- React components arranged and interelated according to [FLUX](https://facebook.github.io/flux/) architecture using [Redux](https://github.com/reactjs/redux/blob/master/README.md) enforce a unidirectional flow of information ensuring that backend data stays in sync with the frontend state of the client application at all times. 

&#9733;*React DnD*&#9733;

- [React DnD (Drag and Drop)](https://github.com/react-dnd/react-dnd) module integration preserves the Redux loop so users drag todos through the UI without the possibility of representing frontend state inconsistent with the backend database.

&#9733;*Material UI*&#9733;

- Customized prestyled [Material UI](http://www.material-ui.com/#/) React components provide many familiar industry-standard UI/UX styling features created and proliferated by Google. 

#### Mobile 

[![Wercker](https://img.shields.io/badge/Coming-Soon-yellowgreen.svg)]()

- This feature is still being developed and we hope to make a version available soon. 

- The frontend is built in React Native using the React Native Redux module for unidirectional FLUX information architecture and React Native Material UI for modern styling consistent with web application.

### Backend Server Side

Independently hosted backend serves data for both the web and mobile applications. Ruby on Rails application server routes external requests to lightweight PostgreSQL database and returns customized JSON data constructed using the Ruby's jbuilder gem for optimized frontend stateshape.

&#9733;*PostgreSQL*&#9733;

- Two tables, one consisting of user data, the other todo data, compose a lightweight database indexed by users and by todos-by-user for less costly SQL querying.

&#9733;*Ruby on Rails*&#9733;

- Routes and server-side authorization cycle managed by Rails via Ruby's BCrypt gem for salting users' passwords to be securely stored in the database alongside Ruby's SecureRandom module for secure session token management.

- 




[//]: # (Deep delving into 2-3 features that show off your technical abilities and mastery of concepts/language)


## &#8734; **DoDate's Drag/Drop Redux Loop using React DnD** &#8734;

- A user dragging a todo sees a transluscent screenshot of the todo component being moved throughout the UI and not the component itself. The actual component stays in place in the DOM at this point. 

- A user attempting to drop a todo on the client-side frontend initiates an action that, if completed, changes the state of the frontend such that the backend database would need to be updated to stay consistent with the new frontend state. 

- For this reason, when the drop action is initiated by the user, an AJAX call requests the update on the backend to be attempted first while the drop action stalls until the return of a successful promise from that AJAX request.

- After the backend data is updated successfully and this is information is processed by the frontend reducer, only then is the correlating elements of DOM repainted and the drag/drop action successfully complete.

- If the backend update in not successful, the drop action fails to complete and the todo component stays in its original, dragged-from, location in the DOM.

- So, whenever the todo moves its location on the calendar, its time data is guaranteed to be up-to-date on the backend. The user safely logs out without losing precious planning work.






[//]: # (Discuss challenges faced and my solutions to those challenges)

[//]: # (Code snippets that show off your best code)


