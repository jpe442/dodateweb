export const convertToSync = (todo) => {
  
  function dayToNumConvert(workflow_pos) {
    let converter = { 'M': 1, 'T': 2, 'W': 3, 'TH': 4, 'F': 5, 'ST': 6, 'SN': 7 }
    return converter[workflow_pos]
  }
  
  const dateTimeNow = new Date(); // i.e. new Date object

  const dayNow = dateTimeNow.getDay(); // i.e. 2 for 'M'

  const dateNow = dateTimeNow.getDate(); // i.e. 22

  const todoDay = dayToNumConvert(todo.workflow_pos); // 'M'

  const todoStart = todo.time_slot; // 11

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

  let event = { 'start': { 'dateTime': startString }, 'end': { 'dateTime': endString }, 'summary': todo.task }
  return event

}