export const ProgressBar = ({currentStep, numberOfQuestions}) => {
  const startStep = 1
  return (
    <div className="progress-bar">
      <input type="range" min={startStep} max={numberOfQuestions} value={currentStep} disabled></input>
      <div className="text">Question {currentStep} of {numberOfQuestions}</div>
    </div>
  )
}