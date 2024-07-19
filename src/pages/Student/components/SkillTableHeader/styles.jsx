import styled from "styled-components";

const TableTitle = styled.div`
    font-size: 1.2rem;
`

const Table = styled.table`
    /* border: 1px solid;
    border-color: black;
    border-radius: 5px; */
    padding: 0;
    background-color: black;
    width: 60%;
    align-items: center;
`

const TableHeader = styled.th`
    background-color: #9E2896;
    margin: 0;
    color: #F0F0F0;
    padding: 5px 10px;
    width: 30%;
`

export {TableTitle, Table, TableHeader}