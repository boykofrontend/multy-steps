import React, { FC } from 'react';

import RadioButtonsGroup from '../../RadioButtonsGroup';
import QuantityInput from '../../QuantityInput';
import Button from '../../Button';
import Input from '../../Input';

import { mockData } from '@/src/utils/constants';
import { DEFAULT_URL } from '@/src/utils/paths';
import { StepsFormValues } from '@/src/types/types';

type FormValuesType = Pick<StepsFormValues, "radioProject" | "email">;

type ThirdStepProps = {
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
  formValues: FormValuesType;
  onRadioButtonChange: (name: string, type: string) => () => void;
  onCountChange: (name: string, type: string) => void;
  handlePrevStep: () => void;
};

const ThirdStep: FC<ThirdStepProps> = ({
  formValues, onRadioButtonChange, onInputChange, handlePrevStep, onCountChange
}) => (
  <div className='form-step-third'>
    <QuantityInput onChange={onCountChange} />
    <RadioButtonsGroup
      data={mockData.THIRD_STEP_BUTTONS}
      inputName='radioProject'
      activeButton={formValues.radioProject}
      onChange={onRadioButtonChange}
      title={mockData.THIRD_STEP_MIDDLE_TITLE}
    />
    <div className='email-wrapper'>
      <h2 className='email-title'>Contact Email</h2>
      <Input
        type='email'
        onChange={onInputChange}
        name="email"
        defaultValue={DEFAULT_URL}
        value={formValues['email']}
        required={true}
      />
    </div>
    <div className='buttons-wrapper'>
      <Button
        name="Back"
        className="back-btn"
        type='button'
        onClick={handlePrevStep}
      />
      <Button
        name='Create Project'
        className="next-btn"
        isDisabled={!formValues.radioProject || !formValues.email}
        type='submit'
      />
    </div>
  </div>
);

export default ThirdStep;