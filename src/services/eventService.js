import api from "./api";
import { getHeaders } from "./headers";

const fetchEvents = async () => {
    var date = new Date();

    try {
        const headers = getHeaders();
        const response = await api.get(
            `/event?month=${date.getMonth()}&year=${date.getFullYear()}`,
            {
                headers: headers
            }
        );

        const fetchedEvents = response.data.map(event => {
            return {
                id: event.id,
                title: event.disciplineId != null ? "Aula" : "Evento",
                start: new Date(event.startsAt),
                end: new Date(event.endsAt),
                desc: event.description,
                color: 'green',
                tipo: event.disciplineId != null ? "Aula" : "Evento"
            }
        });

        return fetchedEvents
    } catch (error) {
        console.error('Failed to fetch events:', error);
    }
}

export {
    fetchEvents
}