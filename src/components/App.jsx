import { useState } from 'react';
import { Statistics, FeadbackOptions, Section, Notification } from 'components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setters = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };
  const handleLeaveFeadback = option => {
    setters[option](prevState => prevState + 1);
  };
  const options = Object.keys(setters);
  const total = bad + neutral + good;
  const positivePercentage = total > 0 ? Math.round((100 * good) / total) : 0;
  const statistics = { good, neutral, bad, total, positivePercentage };

  return (
    <>
      <Section title="Please leave feedback">
        <FeadbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeadback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics {...statistics} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
