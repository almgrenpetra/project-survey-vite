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
    name: "",
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

  return (
    <div>
      {currentStep === 1 && (
        <>
          <p>Step 1</p>
          <Name value={surveyData.name} updateSurveyData={updateSurveyData} />
        </>
      )}
      {currentStep === 2 && (
        <>
          <p>Step 2</p>
          <RoomType
            value={surveyData.roomType}
            updateSurveyData={updateSurveyData}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <p>Step 3</p>
          <Duration
          // value={surveyData.duration}
          // updateSurveyData={updateSurveyData}
          />
        </>
      )}
      {currentStep === 4 && (
        <>
          <p>Step 4</p>
          <Treatment
            value={surveyData.treatment}
            updateSurveyData={updateSurveyData}
          />
        </>
      )}
      {currentStep === 5 && (
        <>
          <p>Step 5</p>
          <Stars
          // value={surveyData.stars}
          // updateSurveyData={updateSurveyData}
          />
        </>
      )}
      {currentStep === 6 && (
        <>
          <p>Step 6</p>
          <Comments
            value={surveyData.comments}
            updateSurveyData={updateSurveyData}
          />
        </>
      )}

      {currentStep > 1 && <button onClick={prevStep}>Back</button>}

      {currentStep < 6 ? (
        <button onClick={nextStep}>Next</button>
      ) : (
        <button onClick={submitSurvey}>Submit</button>
      )}
    </div>
  );
};
