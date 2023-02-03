import { useState, useCallback } from 'react';
import { Statistics, FeadbackOptions, Section, Notification } from 'components';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeadback = useCallback(option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  }, []);

  const options = Object.keys(feedback);
  const { good, neutral, bad } = feedback;
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
