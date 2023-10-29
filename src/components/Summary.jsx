export const Summary = ({ surveyData }) => {
  console.log("treatment:", surveyData.treatment);
  return (
    <div className="summary">
      <p>Thank your for your valuable feedback {surveyData.name}!</p>
      <p>Here is a summary about your feedback:</p>
      <p>
        You stayed in our {surveyData.roomType}, for a period of{" "}
        {surveyData.duration}.{" "}
        {surveyData.treatment === "I had no treatments"
          ? "You did not book any treatments."
          : `You booked a ${surveyData.treatment} treatment and gave us a
        rating of ${surveyData.stars}!`}
      </p>
      <p>
        Your feedback will help us to improve our services for you. For your
        next booking, we offer you 15% off! Use the code “BalanceMe”
      </p>
      <p>Hope to welcome you soon again.</p>
    </div>
  );
};
