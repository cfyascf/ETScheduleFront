import styled from "styled-components";

const Table = styled.table`
    
    padding: 0;
    background-color: black;
    width: 60%;
    
`

const TableDown = styled.td`
    background-color: white;
    padding: 5px 10px;
    width: 30%;
`

const Input = styled.input`
    width: 80%;
`

const Button = styled.button`
    width: 20%;
    padding: 5px 10px;
    border: 1px solid;
    border-color: #d8d8d8;
    border-radius: 5px;
    background-color: #d8d8d8;
`

export { Table, TableDown, Input, Button }