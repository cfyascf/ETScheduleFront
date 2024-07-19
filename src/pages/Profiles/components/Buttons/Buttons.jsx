import { OptionsContainer,Path, PathContainer, Imgs} from "./styles";


const Buttons = ( ) => {
    return (
        <>
            <OptionsContainer>
                <PathContainer>
                    <Imgs src={studant}></Imgs>
                    <Path>STUDENT</Path>
                </PathContainer>
                <PathContainer>
                    <Imgs src={teacher}></Imgs>
                    <Path>INSTRUCTOR</Path>
                </PathContainer>
                <PathContainer>
                    <Imgs src={boss}></Imgs>
                    <Path>ADMINISTRATOR</Path>
                </PathContainer>
            </OptionsContainer>
        </>
    );
}

export default Buttons;