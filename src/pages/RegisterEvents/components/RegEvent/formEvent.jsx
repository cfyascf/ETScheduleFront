import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api'
import 'react-dropdown/style.css';
<<<<<<< HEAD
import './style.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> feat-gabi

import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText} from "./styles"

const Reg = () => {

    const navigate = useNavigate();

    // dropdown population
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    // data to send via post
    const [groupsId, setGroupsId] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // input data
    const [eventName, setEventName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [eventDescription, setEventDescription] = useState('')

    useEffect(() => {
        fetchOptions(); // Função para buscar as opções da API ao montar o componente
    }, []);

    const fetchOptions = async () => {
        try {
            const response = await api.get('/group')

            const groups = response.data.map(group => ({
                label: group.name
            }))

            const groupsId = response.data.map(group => ({
                value: group.id
            }))

            setOptions(groups)
            setGroupsId(groupsId)

        } catch (error) {
            console.error('Erro ao fazer requisição:', error)
        }
    }

    // when selected, gets option name and index
    const handleSelect = (option) => {
        setSelectedOption(option);

        const index = options.findIndex(item => item.label === option.label);
        setSelectedIndex(index);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(eventName == ''){
            toast.error("Event Name is required", { 
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

        if(groupsId == []){
            toast.error("Group is required", { 
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
        if(eventDescription == ''){
            toast.error("Event descripton is required", { 
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


        console.log(startDate, endDate)

        // converts data to desired format
        const formattedStartDate = `${startDate}:00Z`;
        const formattedEndDate = `${endDate}:00Z`;

        console.log(formattedStartDate, formattedEndDate)

        if (!selectedOption) {
            toast.error("No option selected", { 
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
                "groupId": groupsId[selectedIndex].value,
                "startsAt": formattedStartDate,
                "endsAt": formattedEndDate,
                "description": eventDescription
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
                toast.success("Event registered successfully!", {
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
                        <ColoredText>REGISTER AN EVENT</ColoredText>
                        <FormGroup>
                            <Label htmlFor="nameevent">Event name:</Label>
                            <Input type="text" value={eventName} onChange={(e) => { setEventName(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
<<<<<<< HEAD
                            <Label htmlFor="nameclass">Class:</Label>
                            <Dropdown className='Dropdown' options={options} value={selectedOption} onChange={handleSelect} placeholder="Select an option" />
=======
                            <Label htmlFor="nameclass">Group name:</Label>
                            <Dropdown options={options} value={selectedOption} onChange={handleSelect} placeholder="Select an option" />
>>>>>>> feat-gabi
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start date and time:</Label>
                            <Input type="datetime-local" value={startDate} onChange={(e) => { setStartDate(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End date and time:</Label>
                            <Input type="datetime-local" value={endDate} onChange={(e) => { setEndDate(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eventDescription">Event description:</Label>
                            <Input type="text" value={eventDescription} onChange={(e) => { setEventDescription(e.target.value) }}></Input>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;
