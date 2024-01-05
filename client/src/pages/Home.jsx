import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import OptionsCard from '../components/OptionsCard';
import Heading from '../components/Heading';

const Home = () => {
    const ops = ["NOTES", "SUMMARIZER", "QNA", "REPHRASER", "TRANSLATOR"];
    const cls = ["#F39F5A", "#F3755C", "#AE455A", "#874B9E", "#564E99"];

    return (
    <>
        <Navbar />
        <Heading>PARA</Heading>
        <div className='dashboard-container'>
            {
                ops.map((op, i) => (
                    <OptionsCard key={i} color={cls[i]} title={op} />
                ))
            }
        </div>
    </>
  )
}

export default Home