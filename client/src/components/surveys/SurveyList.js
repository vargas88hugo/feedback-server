import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent One: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <span className="orange-text" style={{marginRight: "20px"}}>Yes: {survey.yes}</span>
            <span className="orange-text">No: {survey.no}</span>
          </div>
        </div>
      );
    });
  }

  render() { 
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys }
}
 
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);