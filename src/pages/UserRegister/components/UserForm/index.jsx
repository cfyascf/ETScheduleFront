import React, { useState, useEffect } from 'react';
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, CheckboxArea } from "./styles"
import Dropdown from 'react-dropdown';
import './style.css';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api'


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


        if (!selectedOption && isStudentChecked) {
            console.error('Nenhuma opção selecionada.');
            return;
        }

        try {
            console.log("aqui")

            const response = await api.post('/user', {
                "groupId": groupsId[selectedIndex] ? groupsId[selectedIndex].value : undefined,
                "roles": [
                    isStudentChecked ? "student" : undefined,
                    isAdminChecked ? "administrator" : undefined,
                    isInstruChecked ? "instructor": undefined
                ],
                "username": userName,
            });

            console.log(response);

            navigate('/instructor-home');

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
