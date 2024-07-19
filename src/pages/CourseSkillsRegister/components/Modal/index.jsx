import React, { useState } from "react";
import { Modal, ModalContainer, Title, ImgsIcon, FormGroup, Input, Label, Button } from "./styles";
import icon from '/X_circle.svg';

const EventModal = ({ event, onClose, onAddSkill }) => {
    const [skillDescription, setSkillDescription] = useState('');
    const [skillWeight, setSkillWeight] = useState(0);

    const handleSkillDescriptionChange = (event) => {
        setSkillDescription(event.target.value);
    };

    const handleSkillWeightChange = (event) => {
        let weight = parseInt(event.target.value);

        if (weight < 0) {
            weight = 0;
        }

        setSkillWeight(weight);
    };

    const handleSubmit = () => {
        const newSkill = {
            description: skillDescription,
            weight: skillWeight
        };

        onAddSkill(newSkill);
        onClose();
    };

    return (
        <Modal>
            <ModalContainer>
                <ImgsIcon onClick={onClose} src={icon} />
                <Title>{event.title}</Title>
                
                <FormGroup>
                    <Label htmlFor="skill">Skill:</Label>
                    <textarea 
                        id="skill" 
                        value={skillDescription} 
                        onChange={handleSkillDescriptionChange}
                        style={{
                            resize: 'none',
                            padding: '8px',
                            height: '90px',
                            borderRadius: '10px'
                        }}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="weight">Weight:</Label>
                    <Input
                        id="weight"
                        type="number"
                        value={skillWeight}
                        onChange={handleSkillWeightChange}
                    />
                </FormGroup>
                <Button type="button" onClick={handleSubmit}>Submit</Button>
            </ModalContainer>
        </Modal>
    );
};

export default EventModal;
