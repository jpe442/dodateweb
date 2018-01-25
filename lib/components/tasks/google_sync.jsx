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

export default syncEvent = () => {

  const dayToNumConvert = (workflow_pos) => {
    let converter = { 'M': 1, 'T': 2, 'W': 3, 'TH': 4, 'F': 5, 'ST': 6, 'SN': 7 }
    return converter[workflow_pos]
  }

  let dateNow = new Date(); // i.e. new Date object

  let dayNow = dateNow.getDay(); // i.e. 2 for 'M'

  let dateOfMonth = dateNow.getDate(); // i.e. 22

  let todoDay = dayToNumConvert(todo.workflow_pos); // 'M'

  let todoStart = todo.start_slot // 11

  if (dayNow === todoDay) {
    // create start/end dateTime using date/timezone from current day and 
    // start-time/calculated endtime from todo
    let newStartDateTime = new Date();
    newStartDateTime.setHours(todoStart, 0, 0)
    let startString = newStartDateTime.toJSON();

    let newEndDateTime = new Date();
    newEndDateTime.setHours(todoStart + 1, 0, 0)
    let endString = newEndDateTime.toJSON();

    let event = { 'start': startString, 'end': endString, 'summary': this.props.todo.task };


  } else if (dayNow < todoDay) {
    // get the difference as an integer by subtracting numerical dayNow
    // from numerical todoDay
    let diff = todoDay - dayNow;
    // add that number of days to the dateOfMonth and use to create a new
    // date object
    let newSyncTodoDate = dateOfMonth(dateNow) + diff;

    let newSyncTodoStart = todo.start_time;

    let newSyncTodoEnd = todo.start_time + (convert(todo.start_time, todo.duration))

    let newSyncTodoDateTime = new Date();

    newSyncTodoDateTime.setHours()

    // create DateTime object using newSyncDate/Start
    // create DateTime object using newSyncDate/End
    // pull the ISO string conversions from each object
    // use todo.task and dateTime strings to create event object
    // send event object to Google Calendar API

    createEvent(start, end, todo.task)

  } else if (dayNow > todoDay) {

  }

}