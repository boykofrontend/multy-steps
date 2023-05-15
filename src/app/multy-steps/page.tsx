'use client';

import Steps from '@/src/components/Steps';
import StepsForm from '@/src/components/StepsForm';
import { useState } from 'react';


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
