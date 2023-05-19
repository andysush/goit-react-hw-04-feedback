import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFedbacks = () => {
    const goodCalc = this.state.good;
    return this.countTotalFeedbacks() !== 0
      ? Math.round((goodCalc / this.countTotalFeedbacks()) * 100)
      : 0;
  };

  render() {
    const total = this.countTotalFeedbacks();
    const precentage = this.countPositiveFedbacks();

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message={'There is no feedbacks, yet'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              precentage={precentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
