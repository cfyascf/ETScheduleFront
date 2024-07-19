import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText } from "./styles"
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import api from '../../../../services/api'

const Reg = () => {

    const [nameClass, setNameClass] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("aaa");
        try {
            const response = await api.post('/group', {
                "name": nameClass,
                "startAt": startDate,
                "endDate": endDate
            });

            // if(!response.ok)
            //     toast.error("Error posting data.")
            // else
            //     toast.success("Class created with sucess!")

        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            // Tratamento de erro
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
