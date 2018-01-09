//SurveyField contains logic to render a single
//label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } })=> {
    return (
        <div>
            <label>{label}</label><br />
            <input {...input} />
            {touched && error? <p className="bg-danger">{error}</p> : ''}
        </div>
    );
};