import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Facts(){
  function gotoprofile() {
    navigate(`/profile`)
  }
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  console.log(data);
  return (
    <>
      {data.map((item) => (
        
          <div
            key={item.id}
            style={{ backgroundColor: "blue", cursor: "pointer" }}
            onClick={gotoprofile}
          >
            <p>{item.type}</p>
            <p>{item.text}</p>
          </div>
      ))}
    </>
  );
}