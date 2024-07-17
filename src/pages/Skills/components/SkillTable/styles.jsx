import styled from "styled-components";

const TableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
`

const TableTitle = styled.div`
    font-size: 1.2rem;
`

const Table = styled.table`
    border: 1px solid;
    border-color: black;
    border-radius: 5px;
    padding: 0;
    background-color: black;
    width: 60%;
`

const TableHeader = styled.th`
    background-color: #9E2896;
    margin: 0;
    color: #F0F0F0;
    padding: 6px 20px;
`

const TableDown = styled.td`
    background-color: white;
    padding: 5px 10px;
`

export {TableContainer, TableTitle, Table, TableHeader, TableDown}