import { Table, TableHeader, } from "./styles"

const SkillTableHeader = (props) => {
    return (
        <>
            <Table>
                <tr>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Weight</TableHeader>
                    <TableHeader style={{
                        width: '10%'
                    }}></TableHeader>
                </tr>
            </Table>
        </>
    )
}

export default SkillTableHeader

