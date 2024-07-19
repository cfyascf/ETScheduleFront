import styled from "styled-components";

const CaptionTable = styled.caption`
    caption-side: bottom;
    padding: 10px;
    font-weight: bold;
`

const THTable = styled.th`
    border: 1px solid #ccc;
    padding: 12px;
    width: 50%;
    text-align: center;
`

const THTableColTitle = styled.th`
    border: 1px solid #ccc;
    padding: 12px;
    width: 50%;
    text-align: center;
`

export { CaptionTable, THTable, THTableColTitle };