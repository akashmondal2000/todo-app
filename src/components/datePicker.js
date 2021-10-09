import React from 'react'
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const DatePicker = ({getter,setter}) => {
    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            label="DateTimePicker"
            inputVariant="outlined"
            value={getter}
            onChange={setter}
          />
        </MuiPickersUtilsProvider>

    )
}

export default DatePicker
