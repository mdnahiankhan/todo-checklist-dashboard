import { format } from 'date-fns';
import React, { useState } from 'react';
import DatePages from '../DatepPages/DatePages';

const Availabletodos = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <DatePages
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></DatePages>
            <h1 className='text-center text-primary font-bold
            '>You have selected date {format(selectedDate, "PP")}</h1>
        </div>
    );
};

export default Availabletodos;