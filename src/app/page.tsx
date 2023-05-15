'use client';

import { useState } from 'react';

import Steps from '../components/Steps';
import StepsForm from '../components/StepsForm';


const Home = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  return (
    <div className='home-page'>
      <Steps currentStep={currentStep} />
      <StepsForm step={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  )
};

export default Home;
