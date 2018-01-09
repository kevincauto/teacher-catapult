import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="btn btn-warning"
                onClick={onCancel}
            >
                Back
            </button>
            <button 
                onClick={()=> submitSurvey(formValues, history)}
                className="btn btn-success pull-right">
                <span className="glyphicon glyphicon-check"></span> Send Survey
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));