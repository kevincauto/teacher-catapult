import React, { Component } from 'react';

const SPECIALTIES = [
  'Agriculture',
  'Art',
  'Autistic Support',
  'Behavior Specialist',
  'Business',
  'Computer Information Tech',
  'Citizenship',
  'Communications',
  'Cooperative Education',
  'Driver',
  'Early Childhood',
  'Elementary',
  'Emotional Support',
  'English',
  'English as a Second Language',
  'Environmental Education',
  'Family Consumer Science',
  'Foreign Language - Chinese',
  'Foreign Language - French',
  'Foreign Language - German',
  'Foreign Language - Hebrew',
  'Foreign Language - Italian',
  'Foreign Language - Japanese',
  'Foreign Language - Latin',
  'Foreign Language - Other',
  'Foreign Language - Spanish',
  'Gifted',
  'Guidance Counselor',
  'Health',
  'Language Arts',
  'Library Science',
  'Marketing',
  'Mathematics',
  'Music',
  'Psychologist',
  'Physical Education',
  'Principal',
  'Reading Specialist',
  'Science',
  'Social Studies',
  'Special Education',
  'Special Education - Hearing Impaired',
  'Special Education - Speech and Language',
  'Special Education - Visually Impaired',
  'Stem',
  'Superintendent',
  'Technology Education',
  'Theater',
  'Tutoring',
  'Vocational Instruction'
];

class SubmitResumeCheckBoxes extends Component {
  handleSpecialtyChecked(specialty) {
    this.props.onSpecialtyChecked(specialty);
  }

  render() {
    let checkBoxes = SPECIALTIES.map(specialty => {
      return (
        <div className="checkbox" key={specialty}>
          <label>
            <input
              type="checkbox"
              value={specialty}
              name={specialty}
              defaultChecked={false}
              onChange={e => this.handleSpecialtyChecked(e.target.name)}
            />
            {specialty}
          </label>
        </div>
      );
    });

    let checkBoxes1 = checkBoxes.filter(
      (checkbox, i) => (i <= checkBoxes.length / 2 ? true : false)
    );
    let checkBoxes2 = checkBoxes.filter(
      (checkbox, i) => (i > checkBoxes.length / 2 ? true : false)
    );

    return (
      <div className="row">
        <div className="col-md-6">{checkBoxes1}</div>
        <div className="col-md-6">{checkBoxes2}</div>
      </div>
    );
  }
}

export default SubmitResumeCheckBoxes;
