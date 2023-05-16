import React, { FC } from "react";

import RadioButtonsGroup from "../../RadioButtonsGroup";
import Button from "../../Button";

import { mockData } from "@/src/utils/constants";

type SecondStepProps = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  onRadioButtonChange: (name: string, type: string) => () => void;
  radioGoalValue: string;
};

const SecondStep: FC<SecondStepProps> = ({
  radioGoalValue,
  onRadioButtonChange,
  handlePrevStep,
  handleNextStep,
}) => (
  <div className="form-step-second">
    <RadioButtonsGroup
      data={mockData.SECOND_STEP_BUTTONS}
      inputName="radioGoal"
      activeButton={radioGoalValue}
      onChange={onRadioButtonChange}
    />
    <div className="buttons-wrapper">
      <Button
        name="Back"
        className="back-btn"
        type="button"
        onClick={handlePrevStep}
      />
      <Button
        name="Continue"
        className="next-btn"
        isDisabled={!radioGoalValue}
        type="button"
        onClick={handleNextStep}
      />
    </div>
  </div>
);

export default SecondStep;
