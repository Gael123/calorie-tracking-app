import React from 'react';
import moment from 'moment'

 function DisplayDate(){
  const today = moment().endOf('day')
  const tomorrow = moment().add(1, 'day').endOf('day')
  const date = {date: new Date()}
if (date < today) return 'today'
if (date < tomorrow) return 'tomorrow'
return 'Today'
}
export default DisplayDate;
