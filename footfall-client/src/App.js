import logo from './logo.svg';
import './App.css';
import BasicSelect from './components/Select';
import { Button, TextField, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import BasicBars from './components/chart';
const { Configuration, OpenAIApi, default: OpenAI } = require("openai");


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  const [data, setData] = useState({});
  const [diff, setDiff] = useState({});
  const [graphData, setGraphData] = useState([])
  const [tsData, setTsData] = useState([])
  const [cameras, setCameras] = useState([])
  const [items, setItems] = useState({})

  //const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("")

  const handleSubmit = async (e) => {
    const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true } );
    e.preventDefault();
    setLoading(true);
    setApiResponse("Loading AI Analysis...")

    var prompt = "Provide analytics and planogram related information based on the following in-store cctv data. Do not mention specific values, just a summary of the trends."

    prompt += "Inventory Details: (The items that are visible from the specified camera)"
    prompt += JSON.stringify(items)

    prompt += "CCTV client traffic data: (A time series factor of the foot traffic viewed from a specified camera)"
    prompt += JSON.stringify(graphData)

    try {
      const result = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4-turbo-2024-04-09",
      });
      console.log("response", result.choices[0].message.content);
      setApiResponse(result.choices[0].message.content);
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  var cameraToDiff = {}
  var ts = 0

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/fetch');
        const jsonData = await response.json();
        var tempDiff =  diff
        var tsData = {data:[]}
        Object.entries(jsonData).forEach(([key, value]) => {
          if(!cameraToDiff[key])
            {
              cameraToDiff[key] = []
            }
        });
        setCameras(Object.keys(cameraToDiff))
        Object.entries(jsonData).forEach(([key, value]) => {
          try {
            tempDiff[key] = (jsonData[key] - data[key])
            //tsData.data.push(tempDiff[key]?tempDiff[key]:0);
            cameraToDiff[key].push(tempDiff[key]?tempDiff[key]:0)
          } catch (error) {
            console.log(error)
          }
        });
        var tempGraphData = []
        Object.entries(cameraToDiff).forEach(([key, value]) => {
          try {
            tempGraphData.push({data:value})
          } catch (error) {
            console.log(error)
          }
        });
        setGraphData(tempGraphData);
        setTsData(prevTsData => [...prevTsData, ts]);
        ts += 10;
        var tempData =  data
        Object.entries(jsonData).forEach(([key, value]) => {
          try {
            tempData[key] = value
          } catch (error) {
            console.log(error)
          }
        });
        setDiff(tempDiff);
        setData(tempData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []); 


  return (
    
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <div className="Main-Container">
      <div className="Header">FootfallCV</div>
      <div className="SubTitle">Activity Monitor</div>
      <BasicBars data={{tsData:tsData, graphData:graphData}}/>
      
      <div className="SubTitle">Cameras</div>
      <BasicSelect data={{cameras:cameras,items:items,setItems:setItems}}/>
      
      <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"}}>
      <div className="SubTitle">AI Analytics</div>
      <TextField
          id="outlined-password-input"
          label="OpenAI Key"
          type="password"
          autoComplete="current-password"
          fullWidth
          onChange={(event)=>{setKey(event.target.value)}}
          value={key}
        />
      <Button fullWidth variant="outlined" onClick={handleSubmit}>AI Summary</Button>
      </div>

      <div style={{width:"100%",paddingLeft:"10px",paddingRight:"25px",overflowY:"hidden",overflowX:"hidden",textAlign:"left", paddingTop:"25px", fontSize:"18px", color:"#AAA"}}>
        {apiResponse.split("\n").map( val => <p>{val}</p> )}
      </div>

      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
