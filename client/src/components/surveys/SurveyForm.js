import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({label, name}) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    });
  }
  
  render() { 
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text" style={{marginTop: "30px"}}>
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
 
export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);