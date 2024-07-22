import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import EventModal from "../CalendarModal";

import { fetchEvents } from "../../services/eventService";

const DragAndDropCalendarComponent = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const CalendarDate = () => {
    const [events, setEvents] = useState([]);
    const [eventSelect, setEventSelect] = useState(null);

    const doFetchEvents = async() => {
        const eventsFetched = await fetchEvents();
        setEvents(eventsFetched);
    }

    useEffect(() => {
        doFetchEvents();
    }, []);

    const changeDate = (data) => {
        const { start, end } = data;
        const updatedEvents = events.map((event) => {
            if (event.id === data.event.id) {
                return {
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                };
            }
            return event;
        });
        setEvents(updatedEvents);
    }

    const handleEventClick = (event) => {
        console.log(event);
        setEventSelect(event);
    }

    const handleEventClose = () => {
        console.log("handleEventClose");
        setEventSelect(null);
    }

    return (
        <div>
            <DragAndDropCalendarComponent
                defaultDate={moment().toDate()}
                defaultView='month'
                events={events}
                localizer={localizer}
                onEventDrop={changeDate}
                onEventResize={changeDate}
                onSelectEvent={e => handleEventClick(e)}
                style={{ height: '70vh', width: "50vw", padding: '20px', display: "flex", gap: "10px" }}
            />

            {eventSelect && (
                <EventModal
                    event={eventSelect}
                    onClose={handleEventClose}
                />
            )}
        </div>
    )
}

export default CalendarDate;
