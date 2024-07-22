import React, { useState, useEffect } from 'react';
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, CheckboxArea } from "./styles"
import Dropdown from 'react-dropdown';
import './style.css';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getHeaders } from '../../../../services/headers';




const RegisterForm = () => {

    const navigate = useNavigate();

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const [groupsId, setGroupsId] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const [isStudentChecked, setStudentChecked] = useState(false);

    const [isAdminChecked, setAdminChecked] = useState(false);

    const [isInstruChecked, setInstruChecked] = useState(false);

    const [userName, setUserName] = useState('')

    const fetchOptions = async () => {
        try {
            const headers = getHeaders();
            const response = await api.get(
                '/group',
                {
                    headers: headers
                }
            )

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

    useEffect(() => {
        fetchOptions(); // Função para buscar as opções da API ao montar o componente
    }, []);

    const handleStudentCheckboxChange = () => {
        setStudentChecked(!isStudentChecked);
    };

    const handleAdminCheckboxChange = () => {
        setAdminChecked(!isAdminChecked);
    };

    const handleInstruCheckboxChange = () => {
        setInstruChecked(!isInstruChecked);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);

        const index = options.findIndex(item => item.label === option.label);
        setSelectedIndex(index);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userName === "") {
            toast.error("Username is required", { 
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

        if (!(isAdminChecked || isInstruChecked || isStudentChecked)) {
            toast.error("At least one role must be selected", { 
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

        if (isStudentChecked && groupsId.length === 0) {
            toast.error("Student class must be selected", { 
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

        if (!selectedOption && isStudentChecked) {
            return;
        }

        try {
            const roles = [
                isStudentChecked ? "student" : undefined,
                isAdminChecked ? "administrator" : undefined,
                isInstruChecked ? "instructor" : undefined
            ]

            const headers = getHeaders();
            const response = await api.post('/user', {
                "groupId": groupsId[selectedIndex] ? groupsId[selectedIndex].value : undefined,
                "roles": roles.filter(r => r != undefined),
                "username": userName,
            }, {
                headers: headers,
            });

            console.log(response);
            
            toast.success("user created successfully", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });



            // navigate('/instructor-home');

            // if(!response.ok)
            //     toast.error("Error posting data.")
            // else
            //     toast.success("Event registered successfully!");

        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
    };

    return (
        <>
            <ToastContainer/>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A NEW USER</ColoredText>
                        <FormGroup>
                            <Label htmlFor="username">Username:</Label>
                            <Input id="username" type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }}></Input>
                            <Label htmlFor="role">Role:</Label>
                            <CheckboxArea>
                                <Input id="student" type="checkbox" name="role" onChange={handleStudentCheckboxChange}></Input>
                                <Label htmlFor="student">Student</Label>
                                <Input id="instructor" type="checkbox" name="role" onChange={handleInstruCheckboxChange}></Input>
                                <Label htmlFor="instructor">Instructor</Label>
                                <Input id="administrator" type="checkbox" name="role" onChange={handleAdminCheckboxChange}></Input>
                                <Label htmlFor="administrator">Administrator</Label>
                            </CheckboxArea>
                            {isStudentChecked && (
                                <>
                                    <Label htmlFor="select">Student Class:</Label>
                                    <Dropdown className='Dropdown' options={options} value={selectedOption} onChange={handleSelect} placeholder="Select an option" />
                                </>
                            )}
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    );
}

export default RegisterForm;
