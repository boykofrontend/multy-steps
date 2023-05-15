type stepType = {
  [key: number]: string;
}

export const mockData = {
  TAGS: ["NFT", "GameFi", "DeFi", "DAO", "Ecosystem", "Others", "SocialFi", "Metaverse", "Tools"],
  STEPS: ["Start First Project", "Project Details", "Create Project"],
  SECOND_STEP_BUTTONS: ["Grow My Community", "Activate Existing Members", "Understand My Members", "Other"],
  THIRD_STEP_BUTTONS: ["Pre Product", "Post Product"],
  THIRD_STEP_MIDDLE_TITLE: 'Are you pre or post product launch?',
};


export const StepSubtitles:stepType = {
  1: 'To Create Quest you need firstly create Project',
  2: 'Project Details',
  3: 'Create Project'
};

export const StepTitles:stepType = {
  1: 'Add New Project',
  2: 'What is your main goal with AlphaQuest?',
  3: 'How many full-time workers on project?'
};

export const DESKTOP_WIDTH = 1440;

export const RegExps = {
  email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$",
}