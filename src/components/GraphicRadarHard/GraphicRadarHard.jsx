import { Title, GraphicContainer } from "./styles";
import { useEffect, useState } from "react"
import { Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import api from "../../services/api"

const GraphicRadarHard = () => {

  const mock = [
    { subject: 'Python', A: 0 },
    { subject: 'Java', A: 0 },
    { subject: 'JavaScript', A: 0 },
    { subject: 'HTML/CSS', A: 0 },
    { subject: 'React', A: 0 }
  ];
  

  const [data, setDataA] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userInfo = parseJwt()
        const response = await api.get(`/report/profile/${userInfo['profileId']}`)

        const hard_skill = response.data['hardSkills'];

        let index = -1;
        const data_a_dict = hard_skill.map(u => {

          index ++;
        
          return { subject: u['competence_name'], A: 20 * u['value'] == 0 ? u['value'] : u['value'] };
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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`${label} : ${data.A}`}</p>
        </div>
      );
    }

    return null;
  };


  return (
    <>
      <GraphicContainer>
        <Title>Hard Skills</Title>
        <RadarChart outerRadius={100} width={730} height={310} data={data}>
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