import React, { Component } from 'react';

import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() { 
    return (
      <div style={{marginTop: '50px'}}>
        <SurveyForm />
      </div>
    );
  }
}
 
export default SurveyNew;