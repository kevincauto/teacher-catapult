//SurveyField contains logic to render a single
//label and text input

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <br />
      <input className="form-control" {...input} />
      {touched && error ? <p className="bg-danger">{error}</p> : ''}
    </div>
  );
};
