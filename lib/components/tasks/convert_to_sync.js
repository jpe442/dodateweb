// export const convertToSync = (todo) => {
  
//   // create simole helper method to convert from DoDate workflow_pos (e.g. 'M') to Date-
//   // object-compatible integer for representing day

//   const dayToNumConvert = (workflow_pos) => {
//     let converter = { 'M': 1, 'T': 2, 'W': 3, 'TH': 4, 'F': 5, 'ST': 6, 'SN': 7 }

//     return converter[workflow_pos]
//   }
  
//   // set constants to be used throughout logic

//   const dateTimeNow = new Date(); // i.e. new Date object
//   const dayNow = dateTimeNow.getDay(); // e.g. 2 for Tuesday
//   const dateNow = dateTimeNow.getDate(); // e.g. 22 for Jan 22
//   const todoDay = dayToNumConvert(todo.workflow_pos); //  e.g. 'M' converts to 1
//   const todoStart = todo.time_slot; // e.g. 11

//   const dateTimeNowJSON = dateTimeNow.toJSON(); // convert to JSON compatible ISO string

//   // set variables to be manipulated throughout logic

//   let todoDate; // variable number representing day of the month of the todo
//   let newTodoDate = Date.new(); // variable Date object for setting new Google Cal event date

//   let newStartDateTime; // Date object that will be used to set startString of Google Cal event object
//   let newEndDateTime; // Date object that will be used to set endString of Google Cal event object
//   let startString; // declaration of startString to be set
//   let endString; // declaration of endString to be set
  
//   if (dayNow === todoDay) {
//     // since the day of the todo is the current day,
//       // the date of the Google Cal event must be today's date
//     todoDate = dateNow
//   } else if (dayNow < todoDay) {
//     // since the current day is prior in the week than the current day (e.g. Thursday, Saturday),
//       // we conclude the date of the event being scheduled is the next matching weekday day (e.g. Saturday)
//       // and figure the event date for Google Cal by adding the difference of the current day from the todo day 
//       // to the date now
//     todoDate = (todoDay - dayNow) + dateNow
//   } else if (dayNow > todoDay) {
//     // since the day of the todo is prior in the week than the current day (e.g. Monday, Tuesday) and
//     // we can assume a user is not trying to schedule a todo in the past
//       // we conclude the date of the event being scheduled is the next matching weekday date (e.g. Monday the 22nd)
//       // so we first add 7 to the current date, then subtract the difference of subtracting the todo day from 
//       // the current day ((2-1 for Tuesday - Monday), then finally create a new start Date object set to the result
//       // of the date arithmetic (in this case a total of 6 days from the current date or the upcoming Monday)
//     todoDate = dateNow + 7 - (dayNow - todoDay)
//   }
//    // set new TodoDate object to resulting todoDate from conditional logic above
//   newTodoDate.setDate(todoDate);
//   // set new start Date object to new todo start time
//   // point the start time string at the JSON ISO string extracted from the start Date object
//   newStartDateTime = new Date(newTodoDate.toJSON())
//   newStartDateTime.setHours(todo.time_slot, 0, 0)
//   startString = newStartDateTime.toJSON();
//   //set end string in the same manner as start string
//   newEndDateTime = new Date(newStartDateTime.toJSON());
//   newEndDateTime.setHours(todo.time_slot + 1, 0, 0);
//   endString = newEndDateTime.toJSON();
//   // construct the event object for Google Cal event insertion using the start/end strings and the
//   // todo task for the summar
//   let event = { 
//             'start': { 
//                   'dateTime': startString
//                   }, 
//             'end': { 
//                   'dateTime': endString
//                   }, 
//             'summary': todo.task 
//           }

//   return event
// }



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
