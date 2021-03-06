import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

import formFields from './formFields';
import * as actions from '../../actions'

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });
  
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        style={{marginTop: "30px"}}
        onClick={onCancel}
      >
        <i className="material-icons left">arrow_back</i>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="blue darken-1 btn-flat white-text right"
        style={{marginTop: "30px"}}
      >
        Send
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));