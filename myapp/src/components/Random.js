import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner.js';


const Random = () => {
  const API_KEY = "ie2kXEUQSb3xAikqFcfWbsfJoPuPKMlY";
  
  const [gif,setGif]= useState('');
  const [loading, setLoading] = useState(false);
  
  const fetchData=async()=>{
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      // const output = await axios.get(url);
      const {data} = await axios.get(url);
      const imageSource= data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false)
      // console.log(output);
    } catch (error) {
       console.error("Error fetching random GIF:", error);
    }


  }

  useEffect(() => {
  fetchData();
  }, [])
  
  const clickHandler=()=>{
fetchData();
  }
  return (
    <div
      style={{
        // border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "0.8rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "25rem",
          backgroundColor: "green",
          border: "none",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 2px 7px black",
        }}
      >
        <h1 style={{ backgroundColor: "green" }}>Random Gif</h1>
        {loading ? <Spinner /> : <img src={gif} width="50%" height="50%" />}
        <button
          style={{ backgroundColor: " rgb(28, 190, 77)", cursor: "pointer" }}
          onClick={clickHandler}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Random
