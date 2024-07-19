import { Table, TableDown, Input, Button } from "./styles"

const SkillTable = (props) => {
    return (
        <>
            <Table>
                <tr>
                    <TableDown>{props.weight}</TableDown>
                    <TableDown>{props.description}</TableDown>
                    <TableDown><Input value={props.result}></Input><Button type="submit">Submit</Button></TableDown>
                </tr>
            </Table>
        </>
    )
}

export default SkillTable

