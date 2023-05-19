import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error(`No options for ${name}`);
    }
  };
  // const handleGoodButtonClick = () => {
  //   setGood(prevState => prevState + 1);
  // };
  // const handleNeutralButtonClick = () => {
  //   setNeutral(prevState => prevState + 1);
  // };
  // const handleBadButtonClick = () => {
  //   setBad(prevState => prevState + 1);
  // };

  const countTotalFeedbacks = (() => {
    return Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0
    );
  })();

  const countPositiveFedbacks = (() => {
    return countTotalFeedbacks !== 0
      ? Math.round((good / countTotalFeedbacks) * 100)
      : 0;
  })();

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleButtonClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedbacks === 0 ? (
          <Notification message={'There is no feedbacks, yet'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedbacks}
            precentage={countPositiveFedbacks}
          ></Statistics>
        )}
      </Section>
    </div>
  );
}
// }
