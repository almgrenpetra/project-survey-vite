export const Summary = ({ surveyData, steps }) => {
  // lets grab the names for the select and radio button values.

  const treatmentOptions = steps.find(step => step.valueKey === 'treatment').options.reduce(
    (acc, option) => (
      {...acc, [option.valueKey]: option.name}
      ), {});
  const durationOptions = steps.find(step => step.valueKey === 'duration').options.reduce(
    (acc, option) => (
      {...acc, [option.valueKey]: option.name}
      ), {});
const treatment = treatmentOptions[surveyData.treatment];

  //const durations = durationOptions.reduce((acc, option) => ({...acc, [option.valueKey]: option.name}), {})



  console.log("Treatment options", treatmentOptions);
  // console.log("Duration", durations);

  console.log("treatment:", surveyData.treatment);
  return (
    <div className="summary">
      <p>Thank your for your valuable feedback {surveyData.name}!</p>
      <p>Here is a summary about your feedback:</p>
      <p>
        You stayed in our {surveyData.roomType}, for a period of{" "}
        {durationOptions[surveyData.duration]}.{" "}
        {surveyData.treatment === "no"
          ? "You did not book any treatments."
          : `You booked a ${treatment} treatment and gave us a
        rating of ${surveyData.stars} stars!`}
      </p>
      <p>
        Your feedback will help us to improve our services for you. For your
        next booking, we offer you 15% off! Use the code “BalanceMe”
      </p>
      <p>Hope to welcome you soon again.</p>
    </div>
  );
};
