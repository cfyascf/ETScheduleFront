import {Modal , ModalContainer , Title} from "./styles"
import React from "react"

const EventModal = ({event, onClose}) => {
    return(
        <Modal>
            <ModalContainer>
                <Title>{event.desc}</Title>
                <p>{event.title}</p>
                <p>Inicio: {event.start.toLocaleDateString()}</p>
                <p>Fim: {event.end.toLocaleDateString()}</p>
                <button onClick={onClose}>Fechar</button>
            </ModalContainer>
        </Modal>
    )
}
export default EventModal
