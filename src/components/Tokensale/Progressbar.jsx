import React, { Component } from 'react';
import './ProgressBar.css'; // Import your CSS file for styling

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };

    this.incrementProgress = this.incrementProgress.bind(this);
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.incrementProgress, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  incrementProgress() {
    if (this.state.progress < 1) {
      this.setState(prevState => ({ progress: prevState.progress + 1 }));
    } else {
      clearInterval(this.timerInterval);
    }
  }

  render() {
    const { progress } = this.state;

    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    );
  }
}

export default ProgressBar;
