import { useState } from "react";
import { SelectOption } from "./SelectOption";
import { RadioButtons } from "./RadioButtons";
import { TextInput } from "./TextInput";

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

const starsArray = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];

// Define the survey component
export const SurveyForm = () => {
  const [surveyData, setSurveyData] = useState({
    // name: "",
    // roomType: "",
    // duration: "",
    // treatment: "",
    // stars: "",
    // comments: "",
  });

  // State to track current page in the survey
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedStars, setSelectedStars] = useState("");
  const [comment, setComment] = useState("");

  // const updateSurveyData = (field, value) => {
  //   setSurveyData((values) => ({ ...values, [field]: value }));
  // };

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
          <TextInput
            className="name"
            header="What is your name?"
            text={name}
            setText={setName}
          />
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
        </>
      )}
      {currentStep === 5 && (
        <>
          <p>Step 5</p>
          <RadioButtons
            className="stars"
            header="How many stars would you give your treatment?"
            array={starsArray}
            selected={selectedStars}
            setSelected={setSelectedStars}
          />
        </>
      )}
      {currentStep === 6 && (
        <>
          <p>Step 6</p>
          <TextInput
            className="comment"
            header="Please let us know if there is anything else that you want to share with us.
            "
            text={comment}
            setText={setComment}
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
