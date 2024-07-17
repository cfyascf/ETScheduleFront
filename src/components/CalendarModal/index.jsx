import {Modal , ModalContainer , Title} from "./styles"
import React from "react"

const EventModal = ({event, onClose}) => {
    return(
        <Modal>
            <ModalContainer>
                <Title>{event.title}</Title>
                <p>{event.desc}</p>
                <p>Inicio: {event.start.toLocaleString()}</p>
                <p>Fim: {event.end.toLocaleString()}</p>
                <button onClick={onClose}>Fechar</button>
            </ModalContainer>
        </Modal>
    )
}
export default EventModal
