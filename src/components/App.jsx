import { Component } from 'react';
import { Statistics, FeadbackOptions, Section } from 'components';

export class App extends Component {
  static FEEDBACK_OPTIONS = {
    labels: ['Good', 'Neutral', 'Bad'],
    keys: ['good', 'neutral', 'bad'],
  };

  state = {
    // ...Object.fromEntries(App.FEEDBACK_OPTIONS.keys.map(key => [key, 0])),
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((1000 * this.state.good) / total) / 10 : 0;
  };

  handleLeaveFeadback = optionIndex => {
    const feedback = App.FEEDBACK_OPTIONS.keys[optionIndex];
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const options = App.FEEDBACK_OPTIONS.labels;

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const statistics = { good, neutral, bad, total, positivePercentage };

    return (
      <>
        <Section title="Please leave feedback">
          <FeadbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeadback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics {...statistics} />
        </Section>
      </>
    );
  }
}
