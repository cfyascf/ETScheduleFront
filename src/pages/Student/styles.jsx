import styled from "styled-components";

const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    gap: 50px;
`

const Line = styled.div`
    background-color: #6b6b6b;
    height: 1px;
    width: 100%;
    margin-top: 5px;
`

const SkillsHeader = styled.div`
    width: 95%;
    font-size: 1.3rem;
`

const Select = styled.select`
    width: 20%;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    background-color: #d8d8d8;
    padding: 10px;
`

const SelectContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 95%;
`

const TableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export {PageContent, Line, SkillsHeader, Select, SelectContainer, TableContainer}