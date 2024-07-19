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
            const response = await api.post(`/login`, {
                username: userData['username'],
                password: userData['password'],
                role: role
            })
            localStorage.setItem('@AUTH', response.data.token);

            const users = await api.get(`/user`);
            let firstAccess = false;
            const userInfo = parseJwt();
            
            users.data.forEach((user) => {
                if (user.id == userInfo.userId) {
                    if (user.fullName === null) {
                        firstAccess = true;
                    }
                }
            });

            if(firstAccess)
                navigate('/fistacess');
            else
                navigate('/home');

        } catch (error) {
            // console.log(error);
            // toast.error("Deu erro", {theme: "dark"})
        }
    }

    function parseJwt () {
        var base64Url = localStorage.getItem('@AUTH').split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
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