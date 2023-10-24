import { useState } from "react";
import { Name } from "./Name";
// import { RoomType } from "./RoomType";
// import { Duration } from "./Duration";
// import { Treatment } from "./Treatment";
import { Stars } from "./Stars";
import { Comments } from "./Comments";
import { SelectOption } from "./SelectOption";
import { RadioButtons } from "./RadioButtons";

const roomTypesArray = [
  "<Select type of room>",
  "Option 1",
  "Option 2",
  "Option 3",
];

const durationArray = [
  "1-7 days",
  "8-14 days",
  "15-19 days",
  "more than 19 days",
];

const treatmentArray = [
  "<Select a treatment>",
  "I had no treatments",
  "Treatment 1",
  "Treatment 2",
  "Treatment 3",
];

// Define the survey component
export const SurveyForm = () => {
  const [surveyData, setSurveyData] = useState({
    name: "",
    // roomType: "",
    // duration: "",
    // treatment: "",
    stars: "",
  });

  // State to track current page in the survey
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedDuration, setSelectedDuration] = useState();
  const [selectedTreatment, setSelectedTreatment] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="surveyForm" onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <>
          <p>Step 1</p>
          <Name value={surveyData.name} updateSurveyData={updateSurveyData} />
        </>
      )}
      {currentStep === 2 && (
        <>
          <p>Step 2</p>
          <SelectOption
            className="roomType"
            header="Which room did you stay in?"
            array={roomTypesArray}
            selected={selectedRoomType}
            setSelected={setSelectedRoomType}
          />
          {/* <RoomType
            // value={surveyData.roomType}
            // updateSurveyData={updateSurveyData}
          /> */}
        </>
      )}
      {currentStep === 3 && (
        <>
          <p>Step 3</p>
          <RadioButtons
            className="duration"
            header="How long did you stay at the Balance?"
            array={durationArray}
            selected={selectedDuration}
            setSelected={setSelectedDuration}
          />
          {/* <Duration
            value={surveyData.duration}
            updateSurveyData={updateSurveyData}
          /> */}
        </>
      )}
      {currentStep === 4 && (
        <>
          <p>Step 4</p>
          <SelectOption
            className="treatment"
            header="Did you book any treatments during your stay?"
            array={treatmentArray}
            selected={selectedTreatment}
            setSelected={setSelectedTreatment}
          />
          {/* <Treatment
            value={surveyData.treatment}
            updateSurveyData={updateSurveyData}
          /> */}
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
    </form>
  );
};
