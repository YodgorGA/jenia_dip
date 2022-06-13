import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';
const Calendar = () => {
    const [selectedDate,setSelectedDate] = useState(null);
    return (
        <div className='calendar_container'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="dd/MM/yyyy"
                    disableMaskedInput={true}
                    value={selectedDate}
                    onChange={(newValue)=>{
                        setSelectedDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;