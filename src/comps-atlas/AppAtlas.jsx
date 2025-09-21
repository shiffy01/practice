import { useEffect, useState } from "react";
import AtlasInfo from "./AtlasInfo";
import axios from "axios";
import AtlasInput from "./AtlasInput";

function AppAtlas() {
  const [infoItem, setInfoItem]=useState({})
  useEffect(()=>{
    doApi("israel")
  },[])
  const doApi=async(_country)=>{
    let url="https://restcountries.com/v3.1/name/"+_country;
    try{
      let resp=await axios.get(url)
      console.log(resp.data)
      setInfoItem(resp.data[0])
    }
    catch(err){
      console.log(err)
      alert("There's a problem, come back later")
    }
  }
  const doApiCountryCode=async(_countryCode)=>{
    setInfoItem({})
    let url = "https://restcountries.com/v3.1/alpha/"+_countryCode;
    try{
      let resp=await axios.get(url)
      console.log(resp.data)
      setInfoItem(resp.data[0])
    }
    catch(err){
      console.log(err)
      alert("there was a problem. come back later")
    }
  }
  return (
   <div className="container">
    <h2>Atlas App</h2>
    <AtlasInput doApi={doApi}></AtlasInput>
    <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode}>

    </AtlasInfo>
   </div>
  );
}

export default AppAtlas;
