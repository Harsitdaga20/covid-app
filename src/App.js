import React, { useState ,useEffect} from 'react'
import {
  MenuItem,Select,FormControl
} from '@material-ui/core'
import Covid from './components/covid'
import "./App.css"
const App=()=>{

  const[countries, setCountries]=useState([]); //var
  const [country, setCountry]=useState("Global")
  const [countryInfo, setCountryInfo]=useState({})
  useEffect(()=>{
      const getCovidData =async ()=>{
        await fetch('https://api.covid19api.com/summary')
        .then((res)=>res.json())
        .then((data) => {
          data.Global.Country='Global';
          setCountryInfo(data.Global)
          const countries=data.Countries.map((country)=>({
            name:country.Country,
            value:country.CountryCode
          }));
          setCountries(countries);
        });
        
    };
    getCovidData();
  },[])

  var countryCode;
  const onCountryChange= async (event)=> {
    countryCode=event.target.value;
    setCountry(countryCode);
      await fetch("https://api.covid19api.com/summary")
      .then(response=>response.json())
      .then(data =>{
        if(countryCode === "Global" || countryCode===""){ 
          data.Global.Country='Global';
          setCountryInfo(data.Global);}
        else {
          setCountryInfo(data.Countries.filter(x => x.CountryCode === countryCode)[0])
        }
      })
    
  }

  return (
    <>
    <div className="container">
      <h1>Covid-19 Coronavirus Tracker</h1>
      </div>
      <div className="btn">
      <button id='btn1'>login</button>
      <button id='btn2'>Register</button>

      </div>

      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country} > 
        <MenuItem value="Global">Global</MenuItem>
          {  
            countries.map((country) =>(
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>

      <Covid country={countryInfo.Country} recovered={countryInfo.TotalConfirmed} confirmed={countryInfo.TotalRecovered} deaths={countryInfo.TotalDeaths}/>
    </>
  )
}

export default App