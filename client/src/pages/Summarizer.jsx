import React, { useState } from 'react'
import Heading from './../components/Heading';
import Navbar from '../components/Navbar';
import SumInput from '../components/SumInput';
import "./Summarizer.css"
import PostButton from '../components/PostButton';
import axios from 'axios';
import ResultBox from '../components/ResultBox';

const Summarizer = () => {
  const [inputText, setInputText] = useState("Enter your text here!");
  const [hasSummary, setHasSummary] = useState(false);
  const [summary, setSummary] = useState("");

  const getSummary = async () => {
    try {
      const res = await axios.post('http://localhost:8080/summarizer/get-summary', {
        txt: inputText
      });
      if (res && res.data.success) {
        setHasSummary(true)
        setSummary(res.data.ans)
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <Heading>SUMMARIZER</Heading>
      <div className='sum-container' id='sum'>
        <SumInput val={inputText} setVal={setInputText} />
        <PostButton handleClick={getSummary}>Get Summary</PostButton>
        <ResultBox>{summary}</ResultBox>
      </div>
    </>
  )
}

export default Summarizer