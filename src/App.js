import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App (){
  const apiKey = "d8b8013dffe9261cbf49a988a93447ca"
  const [data , setData]= useState()
  const [city , setCity]= useState()
  const[input ,setInput]=useState();
  const[cityn ,setCityn]=useState();

  const handle=(e)=>{
    setInput(e.target.value);

  }
  const handleClick=(e)=>{
    e.preventDefault();
    // setInput(input);
    setCityn(input)
    console.log(input);
  }

  const getweatherdetails = (cityname) => {
    if(!cityname) return
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityn}&appid=88e33252502df1d5d93b1989509d94a9`
    axios.get(apiUrl).then((res) => {
      console.log("response",res.data.main.temp);
      setData(res.data.main.temp)
      setCity(res.data.name)
      console.log("hi ",res.data.name);
   }).catch((err) => {
    console.log("err", err);
   })
  }

  useEffect(() =>{
    getweatherdetails("delhi")
  }, [cityn])
  

  return(
    <div className='col-md-12'>
      <div className='weatherbg'>
        <h1>Weather App</h1>

      <div className='d-grid gap-3 col-4 mt-4'>
      <input type='text' className='form-control' onChange={handle} value={input}/>
      <button className='btn btn-primary' type='button' onClick={handleClick}>Search</button>
      </div>
      </div>

      <div className='col-mid-12 text-centre mt-5'>

        <div className='shadow rounded weatherResultBox'>

          <img className='weathericon'
          src='https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0'></img>
          <p  className='weathercity'>{city}</p>
          <p  className='weathertemp'>{Math.floor(data-273.15)} °C</p>

         
        </div>
      </div>

    </div>
  );

}

    



export default App;