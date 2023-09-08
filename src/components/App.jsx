import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          totalFeedback={countTotalFeedback}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};
