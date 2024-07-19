import styled from "styled-components";

const Table = styled.table`
    padding: 0;
    background-color: black;
    width: 60%;
`

const TableDown = styled.td`
    background-color: white;
    padding: 7px;
    width: 30%;
    text-align: center;
`

const Imgs = styled.img`
    width: 18%;
    align-self: center;
    cursor: pointer;
`;

export { Table, TableDown, Imgs }