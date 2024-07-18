import React, {useState} from "react";
import moment from "moment";
import{Calendar, momentLocalizer} from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import eventosPadrao from "./eventosPadrao";
import EventModal from "../CalendarModal";

const DragAndDropCalendarComponent = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);


const CalendarDate = () => {
    const [events, setEvents ] =  useState(eventosPadrao);
    const [eventSelect, setEventSelect] = useState(null);

    const changeDate = (data) => {
        const {start, end} = data;
        const updatedEvents = events.map((event) => {
            if (event.id === data.event.id) {
                return{
                    ...event,
                    start: new Date(start),
                    end:  new Date(end)
                };
            }
            return event;
        });
        setEvents(updatedEvents)
    }

    const handleEventClick =  (event) => {
        setEventSelect(event);
    }

    const handleEventClose =  (event) => {
        setEventSelect(null);
    }

    console.log(eventSelect);

    return (
        <div>
            <DragAndDropCalendarComponent 
            defaultDate={moment().toDate()}
            defaultView='month'
            events={events}
            localizer={localizer}
            onEventDrop={changeDate}
            onEventResize={changeDate}
            onSelectEvent={handleEventClick}
            style={{height: '89vh', width: '70vw' }}
            />

        {eventSelect && (
            <EventModal
                event = {eventSelect}
                onClose= {handleEventClose}
            />
        )

        }
        </div>
    )
}

export default CalendarDate;