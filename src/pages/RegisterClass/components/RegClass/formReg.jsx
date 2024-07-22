import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText } from "./styles"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../../services/api'

const Reg = () => {

    const navigate = useNavigate();

    const [nameClass, setNameClass] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(nameClass == ''){
            toast.error("Class Name is required", { 
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

        const formattedStartDate = `${startDate}T00:00:00Z`;
        const formattedEndDate = `${endDate}T00:00:00Z`;

        console.log(formattedStartDate, formattedEndDate)

        try {
            const response = await api.post('/group', {
                "name": nameClass,
                "beginsAt": formattedStartDate,
                "endsAt": formattedEndDate
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
                toast.success("Class created with sucess!", {
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
            console.error('Erro ao fazer requisição:', error);
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
            {/* <ToastContainer /> */}
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A CLASS</ColoredText>
                        <FormGroup>
                            <Label htmlFor="nameclass">Name Class:</Label>
                            <Input id="nameclass" type="text" value={nameClass} onChange={(e) => { setNameClass(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start Date:</Label>
                            <Input id="startdate" type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End Date:</Label>
                            <Input id="enddate" type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value) }}></Input>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;
