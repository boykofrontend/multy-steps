'use client';

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { mockData } from '../utils/constants';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { PAGES_PATHS } from '../utils/paths';
import { cookiesGetCompletedForm } from '../utils/cookiesManager';

interface StepsProps {
  currentStep: number;
}

const Steps: FC<StepsProps> = ({currentStep}) => {
  const router = useRouter();
  const [isExistProject, setIsExistProject] = useState<boolean>(false);

  useEffect(() => {
    const cachedProject = cookiesGetCompletedForm();
    
    if (!!cachedProject) {
      setIsExistProject(true);
    }
  }, []);

  const getClassName = (stepNumber: number) => {
      if (stepNumber === currentStep) {
        return 'active'
      }

      if (stepNumber < currentStep) {
        return 'completed'
      }

      return ''
  };

  const redirectToDetails = () => {
    router.push(PAGES_PATHS.details)
  };

  return (
    <div className='steps'>
      <Button
        className='details-btn'
        name="Existing project"
        onClick={redirectToDetails}
        isDisabled={!isExistProject}
      />
      {mockData.STEPS.map((step, index) => (
        <div key={step} className={`step-container ${getClassName(index + 1)}`}>
          <p className='step-title'>{step}</p>
          <span className='step-dot' />
        </div>
      ))}
      <Image className='steps-image' width='260' height='160' src='/rainbow.png' alt='background image'/>
    </div>
  );
};

export default Steps;