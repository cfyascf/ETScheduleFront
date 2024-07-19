import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText } from "./styles"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import api from '../../../../services/api'

const Reg = () => {

    const navigate = useNavigate();

    const [nameClass, setNameClass] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        const [yearS, monthS, dayS] = startDate.split('-')
        const [yearE, monthE, dayE] = endDate.split('-')

        const formattedStartDate = `${dayS}-${monthS}-${yearS}T00:00:00Z`;
        const formattedEndDate = `${dayE}-${monthE}-${yearE}T00:00:00Z`;

        console.log(formattedStartDate, formattedEndDate)

        try {
            const response = await api.post('/group', {
                "name": nameClass,
                "beginsAt": formattedStartDate,
                "endsAt": formattedEndDate
            });

            navigate('/instructor-home')

            // if(!response.ok)
            //     toast.error("Error posting data.")
            // else
            //     toast.success("Class created with sucess!")

        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
    };

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
