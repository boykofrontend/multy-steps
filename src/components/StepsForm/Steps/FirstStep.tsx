import React, { FC } from 'react';

import Input from '../../Input';
import Tags from '../../Tags';
import Button from '../../Button';

import { DEFAULT_URL } from '@/src/utils/paths';
import { StepsFormValues } from '@/src/types/types';


type FormValuesType = Pick<StepsFormValues, "projectName" | "projectUrl" | "radioTag">;

type FirstStepProps = {
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  formValues: FormValuesType;
  onRadioButtonChange: (name: string, type: string) => () => void;
  handleNextStep: () => void;
}

const FirstStep: FC<FirstStepProps> = ({
  onInputChange, formValues, onRadioButtonChange, handleNextStep
}) =>  (
  <div className='form-step-first'>
    <Input
      label='Project Name (It can be changed later)'
      onChange={onInputChange}
      name="projectName"
      value={formValues['projectName']}
      className='first-step'
    />
    <Input
      label='Project URL (It cannot be changed after creation)'
      onChange={onInputChange}
      name="projectUrl"
      defaultValue={DEFAULT_URL}
      value={formValues['projectUrl']}
      className='first-step'
    />
    <Tags onChange={onRadioButtonChange} />
    <Button
      name='Add Project'
      isDisabled={
        !formValues.radioTag || !formValues.projectUrl || !formValues.projectName
      }
      type='button'
      onClick={handleNextStep}
    />
  </div>
);


export default FirstStep;