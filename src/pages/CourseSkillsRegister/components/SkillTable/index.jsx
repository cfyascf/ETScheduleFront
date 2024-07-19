import React from "react";
import { Table, TableDown, Imgs } from "./styles";
import icon from '/trash.svg';

const SkillTable = (props) => {
    const handleDelete = () => {
        if (props.onDelete) {
            props.onDelete(props.index); 
        }
    };

    return (
        <>
            <Table>
                <tr>
                    <TableDown>{props.description}</TableDown>
                    <TableDown>{props.weight}</TableDown>
                    <TableDown style={{ width: '10%' }}>
                        <Imgs src={icon} onClick={handleDelete} />
                    </TableDown>
                </tr>
            </Table>
        </>
    );
};

export default SkillTable;
