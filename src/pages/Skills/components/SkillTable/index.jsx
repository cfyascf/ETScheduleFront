import { TableContainer, TableTitle, Table, TableHeader, TableDown } from "./styles"

const SkillTable = () => {
    return (
        <>
            <TableContainer>
                <TableTitle>COMPETÊNCIAS</TableTitle>
                <Table>
                    <tr>
                        <TableHeader>Peso</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader>Resultado</TableHeader>
                    </tr>
                    <tr>
                        <TableDown>2</TableDown>
                        <TableDown>Utilizar Esp32</TableDown>
                        <TableDown>Apto</TableDown>
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