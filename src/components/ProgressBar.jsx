export const ProgressBar = ({currentStep, numberOfQuestions}) => {
  return (
    <div>
      Question {currentStep} of {numberOfQuestions}
    </div>
  )
}