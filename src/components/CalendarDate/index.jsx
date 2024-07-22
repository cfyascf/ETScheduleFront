import React, { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import EventModal from "../CalendarModal";
import api from '../../services/api'

const DragAndDropCalendarComponent = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const CalendarDate = () => {

    const [eventosPadrao, setEventosPadrao] = useState([]);
    const [eventSelect, setEventSelect] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/event');
                const events = response.data.map(event => ({
                    id: event.id,
                    title: event.eventName,
                    start: new Date(event.startsAt),
                    end: new Date(event.endsAt),
                    desc: event.description,
                    color: 'green',
                    tipo: 'atividade'
                }));

                console.log(events)
                setEventosPadrao(events);
            } catch (error) {
                console.error('Failed to fetch events:', error);
                // Tratar erro conforme necessário
            }
        }

        fetchEvents();
    }, []); // Executa somente uma vez ao montar o componente

    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Atualiza o estado 'events' com os 'eventosPadrao' assim que eles forem carregados
        setEvents(eventosPadrao);
    }, [eventosPadrao]);

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
        setEventSelect(event);
    }

    const handleEventClose = () => {
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
                onSelectEvent={handleEventClick}
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
