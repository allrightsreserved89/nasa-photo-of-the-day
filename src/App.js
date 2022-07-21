import React, {useState,useEffect} from "react";
import axios from "axios";
import "./App.css";

import NasaPhoto from "./Component/NasaPhoto";

const dummyData={
  date: "2021-12-23",
  explanation:"Are you still looking for that perfect holiday gift for an astronomer? If your night sky is dark and horizon clear enough. the Solar System may have done your shopping for you.",
  hdurl: "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
  title:"Three Planets and a Comet"
}

function App() {
  const [data,setData]=useState(dummyData);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
      setData(res.data);
    })
    .catch(err => console.error(err))
  },[])
  
  return (
    <div className="App">
     {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY