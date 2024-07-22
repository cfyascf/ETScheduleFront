import { Title, GraphicContainer } from "./styles";
import { useEffect, useState } from "react"
import { Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import api from "../../services/api"
import { getHeaders } from "../../services/headers";

const GraphicRadarHard = () => {

  const mock = [
    { fullName: 'Software Testing', subject: 'ST', A: 0 },
    { fullName: 'Web Development', subject: 'WD', A: 0 },
    { fullName: 'Desktop Development', subject: 'DD', A: 0 },
    { fullName: 'Databases', subject: 'DB', A: 0 },
    { fullName: 'Logic Programming', subject: 'LP', A: 0 },
    { fullName: 'Application Security', subject: 'AS', A: 0 },
    { fullName: 'Machine Learning', subject: 'ML', A: 0 },
    { fullName: 'Internet of Things', subject: 'IoT', A: 0 }
  ];

  const acronyms = [ 'ST', 'WD', 'DD', 'DB', 'LP', 'AS', 'ML', 'IoT' ];


  const [data, setDataA] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userInfo = parseJwt();
        const headers = getHeaders();
        const response = await api.get(
          `/report/profile/${userInfo['profileId']}`,
          {
            headers: headers
          }
        )

        const hard_skill = response.data['hardSkills'];

        let index = -1;
        const data_a_dict = hard_skill.map(u => {

          index++;

          return { subject: acronyms[index], fullName: u['competence_name'], A: u['value'] };
        });


        setDataA(data_a_dict);

      } catch (error) {
        setDataA(mock);
      }
    }
    getData();
  }, [])

  function parseJwt() {
    var base64Url = localStorage.getItem('@AUTH').split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
          <p><strong>{data.fullName}</strong></p>
          <p>Score: {data.A}</p>
        </div>
      );
    }
    return null;
  };


  return (
    <>
      <GraphicContainer>
        <Title>Hard Skills</Title>
        <RadarChart outerRadius={100} width={730} height={300} data={data} >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" fontSize={14} />
          <PolarRadiusAxis angle={90} domain={[-20, 20]} />
          <Radar name='Hard Skills' dataKey="A" stroke="#f51c1c" fill="#e15d5d" fillOpacity={0.3} />
          <Legend />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </GraphicContainer>
    </>
  );
}

export default GraphicRadarHard;