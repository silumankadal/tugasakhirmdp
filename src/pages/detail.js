import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail(){
  function gotocat(){
    navigate(`/catfacts`)
  }
  function gotodog(){
    navigate(`/facts`)
  }
  let navigate = useNavigate();
  return(
    <div class="align">
      <button onClick={gotocat}> go to cat page</button>
      <button onClick={gotodog}>go to dog page</button>
    </div>
  )
}