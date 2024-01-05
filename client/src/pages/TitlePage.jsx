import React from "react";
import SubmitButton from "../components/SubmitButton";
import "./TitlePage.css"

function TitlePage() {
  return (
    <div className="hp">
      <h1>PARA</h1>
      <hr />
      <h4>HELLO THERE!</h4>
      <h4>I AM YOUR <span style={{color: "#029964"}}>PERSONAL STUDY ASSISTANT...</span></h4>
      <SubmitButton to="/home"> GET  STARTED! </SubmitButton>
    </div>
  );
}

export default TitlePage;