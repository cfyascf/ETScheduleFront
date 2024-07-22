import { GraphicContainer, Title } from "./styles";
import { useEffect, useState } from "react"
import { Legend, BarChart, Bar, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts';
import api from "../../services/api"

const GraphicBar = () => {

  const mock = [
    { discipline: 'Python', grade: 7.0 },
    { discipline: 'Java', grade: 7.0 },
    { discipline: 'Web', grade: 7.0 },
    { discipline: 'IoT', grade: 7.0 }
  ];
  
  const [data, setDataB] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userInfo = parseJwt()

        const response = await api.get(`/report/profile/${userInfo['profileId']}`)
        console.log(response);
        const performances = response.data['performances'];

        const data_b_dict = performances.map(u => {
          return { discipline: u['discipline'], grade: u['average'] };
        });

        setDataB(data_b_dict)

      } catch (error) {
        setDataB(mock);
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
        <Title>Average of Disciplines</Title>
        <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Bar dataKey="grade" fill="#1adb00" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="discipline" />
          <YAxis domain={[0, 10.0]} />
          <Tooltip />
        </BarChart>
      </GraphicContainer>
    </>
  );
}

export default GraphicBar;