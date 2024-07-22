import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea} from "./styles"
import api from '../../../../services/api'
import { useNavigate } from 'react-router-dom';

const Reg = () => {  
    const navigate = useNavigate();

    // dropdown population
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    // data to send via post
    const [disciplinesId, setDisciplinesId] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // input data
    const [disciplineName, setDisciplineName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetchOptions(); // Função para buscar as opções da API ao montar o componente
    }, []);

    const fetchOptions = async () => {
        try {
            const response = await api.get('/discipline');
            
            const options = response.data.map(discipline => ({
                value: discipline.id,
                label: discipline.name
            }));
    
            setOptions(options);
    
            // Não é necessário mais preencher disciplinesId aqui, já que estamos usando options corretamente
    
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
    };
    
    const handleSelect = (option) => {
        setSelectedOption(option);
    
        const index = options.findIndex(item => item.label === option.label);
        setSelectedIndex(index);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formattedStartDate = `${startDate}:00Z`;
        const formattedEndDate = `${endDate}:00Z`;
    
        if (selectedIndex === -1) {
            console.error('Nenhuma opção selecionada.');
            return;
        }
    
        try {
            const response = await api.post('/event', {
                "name": disciplineName,
                "disciplineId": options[selectedIndex].value,
                "startsAt": formattedStartDate,
                "endsAt": formattedEndDate,
                "description": description
            });
    
            console.log(response);
    
            navigate('/instructor-home');
    
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
    };
    

    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A LESSON</ColoredText>
                        <FormGroup>
                            <Label htmlFor="startdate">Lesson name:</Label>
                            <Input id="startdate" type="text" value={disciplineName} onChange={(e) => { setDisciplineName(e.target.value)}}></Input>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label htmlFor="nameevent">Discipline:</Label>
                            <Dropdown className='Dropdown' options={options} onChange={handleSelect} value={selectedOption} placeholder="Select an option"/>
                        </FormGroup> */}
                        <FormGroup>
                            <Label htmlFor="namediscipline">Discipline:</Label>
                            <Dropdown className='Dropdown' options={options} value={selectedOption} onChange={handleSelect} placeholder="Select an option" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description:</Label>
                            <TextArea id="description" value={description} onChange={(e) => { setDescription(e.target.value)}}></TextArea>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start Date:</Label>
                            <Input id="startdate" type="datetime-local" value={startDate} onChange={(e) => { setStartDate(e.target.value)}}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End Date:</Label>
                            <Input id="enddate" type="datetime-local" value={endDate} onChange={(e) => { setEndDate(e.target.value)}}></Input>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;

// instrutor
// materia
// semestre
