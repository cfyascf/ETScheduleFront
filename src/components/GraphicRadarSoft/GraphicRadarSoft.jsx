import { Title, GraphicContainer } from "./styles";
import { useEffect, useState } from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import api from "../../services/api"


const GraphicRadarSoft = () => {

  const mock = [

    { subject: 'Communication', A: 0 },
    { subject: 'Teamwork', A: 0 },
    { subject: 'Problem Solving', A: 0 },
    { subject: 'Adaptability', A: 0 },
    { subject: 'Time Management', A: 0 }

  ]

  const [data, setDataA] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userInfo = parseJwt()

        const response = await api.get(`/report/profile/${userInfo['profileId']}`)

        const hard_skill = response.data['softSkills'];


        const data_a_dict = hard_skill.map(u => {
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

  return (
    <>
      <GraphicContainer>
        <Title>Soft Skills</Title>
        <RadarChart outerRadius={90} width={730} height={250} data={data} >
          <Legend ></Legend>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[-20, 20]} />
          <Radar name="Soft Skills" dataKey="A" stroke="#321cf5" fill="#321cf5" fillOpacity={0.3} />
        </RadarChart>
      </GraphicContainer>
    </>
  );
}

export default GraphicRadarSoft;