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

DoDate is a Kanban-inspired todo productivity solution wherein users can create unscheduled todos in a list (todo), distribute them accross a one-week calendar (doing), and finally mark them as complete to move them off the calendar to another list (done). Utilizing the latest frontend technologies - *Redux, ReactJS, React Native, React DnD, and Material UI* - DoDate epidomizes the modern single-page-app (SPA).

---
[//]: # (Discussion of technologies used)

## Technologies Utilized: From Front to Back
---
### Frontends: Web & Mobile

#### Web
  
DoDate's primary web-app frontend is built in ReactJS using JavaScript ES6, HTML5, CSS3. 

&#9733;*React with Redux*&#9733;

- React components arranged and interelated according to [FLUX](https://facebook.github.io/flux/) architecture using [Redux](https://github.com/reactjs/redux/blob/master/README.md) to enforce a unidirectional flow of information ensuring that backend data stays in sync with the frontend state of the client application. 

&#9733;*React DnD*&#9733;

- [React Drag-and-Drop (DnD)](https://github.com/react-dnd/react-dnd) module (React DnD) integration preserves the Redux loop so todos in DoDate can be easily dragged throughout the UI without the possibility of becoming out of sync with the backend database.

## &#8734; **DoDate's Drag/Drop Redux Loop using React DnD** &#8734;

- A user dragging a todo sees a transluscent screenshot of the todo component being moved throughout the UI and not the component itself. The actual component stays in place in the DOM at this point. 

- A user attempting to drop todos on the client-side frontend initiates an action that, if completed, would change the state of the frontend such that the backend database would need to be updated to stay consistent with the new frontend state. 

- For this reason, when the drop action is initiated by the user, an AJAX update request sends the update to the backend to be attempted there first and the drop action stalls until the return of a successful promise from the AJAX request.

- After the backend data is updated successfully and this is information is processed by the frontend reducer, only then is the frontend state updated and the drag/drop action successfully complete.

- If the backend update in not successful, the frontend action will fail to be complete and the draggable todo will stay in its original, dragged-from, location.

- So then, if the todo moves its location on the calendar, its timeslot is guaranteed to be up-to-date on the backend. The user can safely log out without losing precious planning work.

&#9733;*Material UI*&#9733;




#### Backend



[//]: # (Deep delving into 2-3 features that show off your technical abilities and mastery of concepts/language)

[//]: # (Discuss challenges faced and my solutions to those challenges)

[//]: # (Code snippets that show off your best code)


