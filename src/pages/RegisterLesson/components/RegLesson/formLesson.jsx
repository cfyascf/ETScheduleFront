import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea } from "./styles"
import api from '../../../../services/api'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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

        if(disciplineName == ''){
            toast.error("Lesson name is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        if(startDate == ''){
            toast.error("Start date is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        
        if(endDate == ''){
            toast.error("End date is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        if(description == ''){
            toast.error("Description is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        if(disciplinesId == ''){
            toast.error("Discipline is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        
    
        const formattedStartDate = `${startDate}:00Z`;
        const formattedEndDate = `${endDate}:00Z`;

        if (selectedIndex === -1) {
            toast.error("No option select.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
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

            const userInfo = parseJwt();
            if (!response.ok)
                toast.error("Error posting data.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            else{
                toast.success("Lesson registered successfully!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setTimeout(() => {
                    switch (userInfo['role']) {
                        case "admin":
                            navigate("/adm-home")
                            break
                        case "instructor":
                            navigate("/instructor-home")
                            break
                    }
                }, 2000);
            }

        } catch (error) {
            toast.error("Error when registering", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
    };

    function parseJwt() {
        var base64Url = localStorage.getItem('@AUTH').split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }


    return (
        <>
            <ToastContainer />
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A LESSON</ColoredText>
                        <FormGroup>
                            <Label htmlFor="startdate">Lesson name:</Label>
                            <Input id="startdate" type="text" value={disciplineName} onChange={(e) => { setDisciplineName(e.target.value) }}></Input>
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
                            <TextArea id="description" value={description} onChange={(e) => { setDescription(e.target.value) }}></TextArea>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start Date:</Label>
                            <Input id="startdate" type="datetime-local" value={startDate} onChange={(e) => { setStartDate(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End Date:</Label>
                            <Input id="enddate" type="datetime-local" value={endDate} onChange={(e) => { setEndDate(e.target.value) }}></Input>
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
