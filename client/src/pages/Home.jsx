import React from 'react'
import Header from '/src/components/Header.jsx';
import ServicesComp from '/src/components/ServicesComp.jsx';
import Tripform from '/src/components/Tripform.jsx';
import EmailSection from '../components/EmailSection';

export default function Home() {
  return (
    <div>
      <Header/>
      <ServicesComp/>
      <EmailSection/>
    </div>
  )
}
