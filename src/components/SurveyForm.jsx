import { useState } from "react";
import { Name } from "./Name";
import { RoomType } from "./RoomType";
import { Duration } from "./Duration";
import { Treatment } from "./Treatment";
import { Stars } from "./Stars";
import { Comments } from "./Comments";

// Define the survey component
export const SurveyForm = () => {
  const [surveyData, setSurveyData] = useState({
    name: "mike",
    roomType: "",
    duration: "",
    treatment: "",
    stars: "",
  });

  // State to track current page in the survey
  const [currentStep, setCurrentStep] = useState(1);

  const updateSurveyData = (field, value) => {
    setSurveyData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    {
      currentStep < 6 && setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    {
      currentStep > 1 && setCurrentStep(currentStep - 1);
    }
  };

  const submitSurvey = () => {
    console.log(surveyData);
  };

  // We save all steps in an array as objects
  const steps = [
      {label: 'Step 1', Component: Name, valueKey: 'name' },
      {label: 'Step 2', Component: RoomType, valueKey: 'roomType' },
      {label: 'Step 3', Component: Duration, valueKey: 'duration' },
      {label: 'Step 4', Component: Treatment, valueKey: 'treatment' },
      {label: 'Step 5', Component: Stars, valueKey: 'stars' },
      {label: 'Step 6', Component: Comments, valueKey: 'comments' }
  ]

  // Our array is indexed from 0 but currentStep starts from 1 so we subtract currentStep with 1 to get the data for the correct step.
  // We store all
  const stepDetails = steps[currentStep - 1]
  return (
    <div className="survey-container">
      <div className="survey-question">
        <h2>Question {currentStep}</h2>
        <stepDetails.Component value={surveyData[stepDetails.valueKey]} valueKey={stepDetails.valueKey} updateSurveyData={updateSurveyData} />
      </div>
      <div className="survey-navigation">
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {/* We use the steps.length instead of hard coding a number. This way we can easily add or remove steps */ }
        {currentStep < steps.length ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitSurvey}>Submit</button>
        )}
      </div>
    </div>
  );
};
