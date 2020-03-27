import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label} name={name} 
        />
      );
    });
  }
  
  render() { 
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="yellow darken-3 btn-flat white-text" style={{marginTop: "30px"}}>
            Cancel
            <i className="material-icons right">clear</i>
          </Link>
          <button type="submit" className="blue darken-1 btn-flat right white-text" style={{marginTop: "30px"}}>
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({name}) => {
    if (!values[name]) {
      errors[name] = `You must provide ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);