import { TableContainer, TableTitle, Table, TableHeader, TableDown, Input } from "./styles"

const SkillTable = () => {
    return (
        <>
            <TableContainer>
                <TableTitle>SKILLS</TableTitle>
                <Table>
                    <tr>
                        <TableHeader>Weight</TableHeader>
                        <TableHeader>Description</TableHeader>
                        <TableHeader>Result</TableHeader>
                    </tr>
                    <tr>
                        <TableDown>2</TableDown>
                        <TableDown>Utilizar Esp32</TableDown>
                        <TableDown><Input value="apto"></Input></TableDown>
                    </tr>
                    <tr>
                        <TableDown>3</TableDown>
                        <TableDown>Utilizar Sensores DHT</TableDown>
                        <TableDown>Apto</TableDown>
                    </tr>
                </Table>
            </TableContainer>
        </>
    )
}

export default SkillTable