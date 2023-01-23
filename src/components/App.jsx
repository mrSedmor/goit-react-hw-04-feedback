import { Component } from 'react';
import { Statistics, FeadbackOptions, Section, Notification } from 'components';

export class App extends Component {
  state = {
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
    return total > 0 ? Math.round((100 * this.state.good) / total) : 0;
  };

  handleLeaveFeadback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const options = Object.keys(this.state);

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
          {total > 0 ? (
            <Statistics {...statistics} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
