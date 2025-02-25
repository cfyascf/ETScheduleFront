import { FormContainer, Imgs, Forms, FormGroup, Input, Label, Button, FormInput } from "./styles"
import logo from "/Bosch_symbol_logo_black_red_1.svg";
import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import api from "../../../../services/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../../services/userContext';

const Form = () => {

    const [usernameValue, setUsername] = useState('');
    const [passwordValue, setPassword] = useState('');
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const navigate = useNavigate();

    const doLogin = async () => {

        if (usernameValue == "") {
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
        if (passwordValue == "") {
            toast.error("Password is required", {
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
            const formData = {
                username: usernameValue,
                password: passwordValue
            }

            const response = await api.post(`/login/confirm`, formData)

            if (response.data['canLogin'] == true) {
                toast.success("Sucess login", {
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
                    if (response.data.profiles.length == 1)
                        goHome(response.data.profiles[0].role)
                    else
                        navigate("/profiles", { state: { serverData: response.data, userData: formData } });
                }, 2000);
            }
            else {
                toast.error("You can't log in", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                })
            }
            // toast.error("Deu erro", {theme: "dark"})
        } catch (error) {
            toast.error("Username or Password don't match", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
            // console.log(error);
        }
    }

    const goHome = async (role) => {

        try {
            const response = await api.post(`/login`, {
                username: usernameValue,
                password: passwordValue,
                role: role
            })
            localStorage.setItem('@AUTH', response.data.token);

            const users = await api.get(`/user`);
            let firstAccess = false;
            const userInfo = parseJwt();

            users.data.forEach((user) => {
                if (user.id == userInfo.userId) {
                    setCurrentUser(user);
                    console.log(currentUser.username)
                    if (user.fullName === null) {
                        firstAccess = true;
                    }
                }
            });

            if (firstAccess)
                navigate('/fistacess');
            else
                switch (role) {
                    case "admin":
                        navigate("/adm-home")
                        break
                    case "instructor":
                        navigate("/instructor-home")
                        break
                    case "student":
                        navigate("/student-home")
                        break
                }


        } catch (error) {
            // toast.error("Deu erro", {theme: "dark"})
        }
    }

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
                    <Imgs src={logo} alt="Bosch Logo" />
                    <FormGroup>
                        <FormInput>
                            <Label htmlFor="username">Username:</Label>
                            <Input id="username" type="text" value={usernameValue} onChange={(e) => { setUsername(e.target.value) }} name="user"></Input>
                        </FormInput>
                        <FormInput>
                            <Label htmlFor="pwd">Password:</Label>
                            <Input id="pwd" type="password" value={passwordValue} onChange={(e) => { setPassword(e.target.value) }} name="password"></Input>
                        </FormInput>
                    </FormGroup>
                    <Button type="button" onClick={doLogin} >Login</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Form

