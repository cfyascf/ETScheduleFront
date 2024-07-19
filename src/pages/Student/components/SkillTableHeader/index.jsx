import { Table, TableHeader, } from "./styles"

const SkillTableHeader = () => {
    return (
        <>
            <Table>
                <tr>
                    <TableHeader>Weight</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Result</TableHeader>
                </tr>
            </Table>
        </>
    )
}

export default SkillTableHeader

