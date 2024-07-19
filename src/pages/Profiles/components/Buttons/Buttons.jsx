import { OptionsContainer,Path, PathContainer, Imgs} from "./styles";
import studant from "/laptop-checklist-education.svg";
import teacher from "/presentation-speaker.svg";
import boss from "/wholesaler.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import api from "../../../../services/api"


const Buttons = ( ) => {

    const location = useLocation();
    const { serverData, userData } = location.state;
    const profiles = serverData['profiles']
    const navigate = useNavigate()

    const renderTitle = (role) => {
        switch (role) {
            case 'admin':
                return 'ADMINISTRATOR';
            case 'instructor':
                return 'INSTRUCTOR';
            case 'student':
                return 'STUDENT';
            default:
                return ''; 
        }
    };
    const renderProfileImage = (role) => {
        switch (role) {
            case 'admin':
                return boss;
            case 'instructor':
                return teacher;
            case 'student':
                return studant;
            default:
                return ''; 
        }
    };

    const selectRole = async (role) => {
        try {
            const response = await api.post(`/api/v1/login`, {
                username: userData['username'],
                password: userData['password'],
                role: role
            })
            localStorage.setItem('@AUTH', response.data.token);
            navigate('/home', { state: { serverData: profiles } })
            // toast.success("Login realizado com sucesso", {theme: "dark"})

        } catch (error) {
            // console.log(error);
            // toast.error("Deu erro", {theme: "dark"})
        }
    }

    return (
        <>
            <OptionsContainer>
                {
                    profiles.map((profile, index) => (
                        <PathContainer key={index} onClick={() => selectRole(profile.role)}>
                            <Imgs src={renderProfileImage(profile.role)} />
                            <Path>{renderTitle(profile.role)}</Path>
                        </PathContainer>
                        
                    ))
                }
            </OptionsContainer>
        </>
    );
}

export default Buttons;