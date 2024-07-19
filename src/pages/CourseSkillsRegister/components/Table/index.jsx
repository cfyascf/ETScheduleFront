import React from 'react';
import { CaptionTable, THTableColTitle } from './styles';

const Table = ({ data, color }) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <table style={{ borderCollapse: 'collapse', width: '60%' }}>
                <CaptionTable>Subject Competencies</CaptionTable>
                <thead>
                    <tr>
                        <THTableColTitle style={{ backgroundColor: color }} scope="col">Skills</THTableColTitle>
                        <THTableColTitle style={{ backgroundColor: color }} scope="col">Weight</THTableColTitle>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ccc', padding: '12px', width: '50%', textAlign: 'center' }}>
                                {item.description === 'Nome' ? <strong>{item.value}</strong> : item.value}
                            </td>
                            <td style={{ border: '1px solid #ccc', padding: '12px', width: '50%', textAlign: 'center' }}>
                                {item.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
