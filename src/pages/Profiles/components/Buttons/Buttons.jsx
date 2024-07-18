import { OptionsContainer,Path, PathContainer, Imgs} from "./styles";
import studant from "/laptop-checklist-education.svg";
import teacher from "/presentation-speaker.svg";
import boss from "/wholesaler.svg";




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