'use client';

import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import Button from '../Button';

import { PAGES_PATHS } from '../../utils/paths';
import { StepSubtitles, StepTitles } from '../../utils/constants';
import {
  cookiesGetCompletedForm,
  cookiesGetFormData, cookiesRemoveFormData,
  cookiesSetCompletedForm, cookiesSetFormData
} from '@/src/utils/cookiesManager';

type FormValuesType = {
  [key: string]: string;
};

interface StepsFormProps {
  step: number;
  setCurrentStep: (step: number) => void;
}


const StepsForm: FC<StepsFormProps> = ({step, setCurrentStep}) => {
  const router = useRouter();
  const [formValues, setFormValues] = useState<FormValuesType>({});
  const [isExistProject, setIsExistProject] = useState<boolean>(false);

  const cachedFormData = cookiesGetFormData() || {};

  useEffect(() => {
    if (!formValues.projectName) {
      setFormValues(cachedFormData);
    }
  }, [step]);

  useEffect(() => {
    const cachedProject = cookiesGetCompletedForm();
    
    if (!!cachedProject) {
      console.log('here');
      
      setIsExistProject(true);
    }
  }, []);

  const redirectToDetails = () => {
    router.push(PAGES_PATHS.details)
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (step === 3 && formValues.quantityCount) {
      cookiesSetCompletedForm(formValues);
      cookiesRemoveFormData();
      redirectToDetails();

    }
  }
  
  const handleNextStep = () => {
    setCurrentStep(step + 1);
    cookiesSetFormData({...formValues, step: step + 1});
  }

  const handlePrevStep = () => {
    setCurrentStep(step - 1);
  }

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({...formValues, [e.currentTarget.name]: e.currentTarget.value});
  };

  const onCountChange = (name: string, count: string)  => {    
    setFormValues({...formValues, [name]: count})
  };

  const onRadioButtonChange = (name: string, type: string) => () => {
    setFormValues({...formValues, [type]: name})
  };
  
  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <p className='form-subtitle'>{StepSubtitles[step]}</p>
      <h2 className={`form-title ${step === 3 ? 'third-step' : ''}`}>
        {StepTitles[step]}
      </h2>

      {step === 1 && (
        <FirstStep
          formValues={{
            projectName: formValues.projectName,
            projectUrl: formValues.projectUrl,
            radioTag: formValues.radioTag
          }}
          onInputChange={onInputChange}
          onRadioButtonChange={onRadioButtonChange}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 2 && (
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          onRadioButtonChange={onRadioButtonChange}
          radioGoalValue={formValues.radioGoal}
        />
      )}

      {step === 3 && (
        <ThirdStep
          formValues={{
            radioProject: formValues.radioProject,
            email: formValues.email,
          }}
          onRadioButtonChange={onRadioButtonChange}
          onInputChange={onInputChange}
          onCountChange={onCountChange}
          handlePrevStep={handlePrevStep}
        />
      )}
      <Button
        className='details-btn'
        name="Existing project"
        onClick={redirectToDetails}
        isDisabled={!isExistProject}
      />
    </form>
  );
};

export default StepsForm;