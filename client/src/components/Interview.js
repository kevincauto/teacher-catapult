import React, { Component } from 'react';
import RightSidebar from './RightSidebar';

class Interview extends Component {
  constructor() {
    super();
    this.state = {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: ''
    };

    this.generateQuestions = this.generateQuestions.bind(this);
  }

  componentDidMount() {
    this.generateQuestions();
  }

  generateQuestions() {
    const firstQuestions = [
      'Why are you a good fit for this job and our school district?',
      'What makes you qualified for this teaching position?',
      'Tell us a little about your professional background.',
      'Can you tell us what separates you from other teaching candidates?'
    ];

    const secondQuestions = [
      'Why did you become a teacher?',
      'What is your philosophy on teaching?',
      'Where do you see yourself in ten years?',
      'What is the most satisfying thing about teaching?',
      'What are your three greatest strengths?',
      'What part of teaching do you look the most forward to?'
    ];

    const thirdQuestions = [
      'Name three of your weaknesses.',
      'Name five words that describe you.',
      "What would you do if you received a note from a parent asking for their son to be excused from last night's homework because the student was too busy with another activity?",
      'What is the biggest challenge in teaching?',
      'What is the scariest thing about teaching?',
      'What are your interests outside of teaching?',
      'What are the important aspects of a good principal?',
      'What type of in-service topics would you be most interested in?',
      'What is the difference between a good teacher and an outstanding teacher?',
      'Are you a flexible person?',
      'What would your last boss say about you?',
      'What is the last book you read? When did you read it? Tell us about it.',
      'What is your least favorite subject, and age group, to teach?',
      'What do you feel is wrong with public education?',
      'How would one of your students describe you?',
      'Imagine you are at your retirement party at the end of your career. How would people describe you as a teacher?',
      'If you were a fruit, which fruit would you be and why?',
      'What type of student were you in high school?',
      'Do you want students to like you? Why or why not?',
      'Who do you look up to and want to emulate?'
    ];

    const fourthQuestions = [
      'Recall a time when things went poorly during a lesson.  How did you deal with the issue?',
      'What is your classroom management plan and what do you hope to accomplish with it?',
      'What does a model classroom look like to you?',
      'How do you avoid misbehavior in your classroom?',
      'What was the most difficult child you have ever dealt with, and how did you deal with them?',
      'Would you create a behavior modification plan for ongoing misbehavior?',
      'What is the most challenging behavioral situation you have ever dealt with? How did you react?',
      'What are your classroom rules?'
    ];

    const fifthQuestions = [
      'Would you say that you are a tough teacher?',
      'Describe an example of when you used positive reinforcement.',
      'How do you integrate technology into your lessons?',
      'How do you allow students to express their creativity in your classroom?',
      'Do you have students use higher order thinking in your class? Give an example.',
      'How do you develop self-esteem within students?',
      'How do you prepare students for standardized testing?',
      'How do you make learning fun?',
      'Describe a typical lesson.',
      'What are techniques you use to teach besides direct instruction?',
      'What do you do if the whole class is "not getting it"?',
      'How closely do you follow your lesson plan?',
      'What do you put in your learning objectives of your lesson plan?',
      'How do you incorporate writing into your lessons?',
      'Describe the most effective teaching techniques.',
      'How do you connect your lessons to the "real world"?',
      'Is it ok for a classroom to be noisy?',
      'How much homework do you assign and how often do you assign it? How do you know this is a good amount?',
      'How do you stay current in your field?'
    ];

    const sixthQuestions = [
      'Give an example of how you differentiated instruction in a lesson.',
      'How do you accommodate for a gifted student in your class?',
      'How do you manage students with different reading abilities?',
      'Explain how you meet IEP needs.',
      'How important is differentiating instruction to you?',
      'How do you feel about inclusive classrooms?',
      'What is your experience co-teaching with an inclusion specialist?',
      'How do you accommodate for non-English speakers?'
    ];

    const seventhQuestions = [
      'Give us examples of how you communicated with other teachers in your department?',
      'Give us an example of effective communication with an administrator.',
      'Have you ever utilized a class newsletter? What did you include in the letter?',
      'How would you deal with an angry parent if they called you?',
      'How do you communicate with parents on a regular basis?',
      "How do you keep parents aware of their son's or daughter's grades?",
      'How would you react if a parent complained about your class?',
      "What would you tell a parent if he or she was concerned about their kid's grades?",
      'What course of action would you take if a student says he or she is being abused at home?'
    ];

    const eigthQuestions = [
      'Is there anything we have not talked about that you would like to share with us?',
      'Do you have any questions for us?'
    ];

    let stateQuestions = {
      q1: firstQuestions[Math.floor(Math.random() * firstQuestions.length)],
      q2: secondQuestions[Math.floor(Math.random() * secondQuestions.length)],
      q3: thirdQuestions[Math.floor(Math.random() * thirdQuestions.length)],
      q4: fourthQuestions[Math.floor(Math.random() * fourthQuestions.length)],
      q5: fifthQuestions[Math.floor(Math.random() * fifthQuestions.length)],
      q6: sixthQuestions[Math.floor(Math.random() * sixthQuestions.length)],
      q7: seventhQuestions[Math.floor(Math.random() * seventhQuestions.length)],
      q8: eigthQuestions[Math.floor(Math.random() * eigthQuestions.length)]
    };

    this.setState(stateQuestions);
  }

  render() {
    return (
      <div className="container">
        <img src="http://placehold.it/468x60/eee" alt="half masthead ad" />
        <br />
        <br />

        <div className="content-container container">
          {/* <img src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg" alt="bg" className="bg" />  */}

          <div className="row">
            <div className="col-md-8 col-lg-9">
              <center>
                <h1>
                  Teacher Interview Question Guide: Questions and How to Answer
                </h1>
              </center>
              <div className="well well-lg">
                <strong>Table of Contents</strong>
                <br />
                <a href="#88">88 Common Teacher Interview Questions</a>
                <br />
                <a href="#generator">
                  Practice Interview Generator (With Answer Hints!)
                </a>
              </div>
              <h2 className="text-center">88 Teacher Interview Questions</h2>
              <p>
                <a name="88">&nbsp;</a>
                <br />
                Below you will find the complete list of 88 sample teacher
                interview questions. These questions are quite common for high
                school, middle school, and elementary teacher interviews. The
                difficulty level of these questions vary from easy to more
                difficult, but all of which are typical of a standard interview.
                When given an interview as a teacher, it is important to realize
                that you can prepare for it just as you would for an important
                test.
              </p>
              <h3>The Introduction Questions</h3>
              <ol>
                <li>
                  Why are you a good fit for this job and our school district?
                </li>
                <li>What makes you qualified for this teaching position?</li>
                <li>Tell us a little about your professional experiences.</li>
                <li>
                  Do you have a professional portfolio you would like to share
                  with us?
                </li>
                <li>Why did you become a teacher?</li>
                <li>Name three words that describe you.</li>
                <li>What is your philosophy on teaching?</li>
                <li>What separates you from other teaching candidates?</li>
              </ol>
              <h3>Questions About College and Student Teaching</h3>
              <ol>
                <li>How well has your university prepared you for teaching?</li>
                <li>What was the most useful college course you have taken?</li>
                <li>
                  What is the most important thing you learned from your
                  cooperating teacher?
                </li>
                <li>
                  What was the most important thing you learned from your
                  overall student teaching experience?
                </li>
                <li>Describe your student teaching experience.</li>
              </ol>
              <h3>Personal Information</h3>
              <ol>
                <li>Where do you see yourself in ten years?</li>
                <li>What are your three greatest strengths?</li>
                <li>Name three of your weaknesses.</li>
                <li>What is the most satisfying thing about teaching?</li>
                <li>What is the biggest challenge in teaching?</li>
                <li>What is the scariest thing about teaching?</li>
                <li>What part of teaching do you look the most forward to?</li>
                <li>
                  What is the last book you read? When did you read it? Tell us
                  about it.
                </li>
                <li>
                  Are you interested in extracurricular involvement at our
                  school?
                </li>
                <li>What are the important aspects of a good principal?</li>
                <li>
                  What is your least favorite subject, and age group, to teach?
                </li>
                <li>
                  Have you ever been a substitute teacher? Describe that
                  experience.
                </li>
                <li>
                  What type of in-service topics would you be most interested
                  in?
                </li>
                <li>
                  Do you belong to any professional teaching organizations?
                </li>
                <li>
                  What is the difference between a good teacher and an
                  outstanding teacher?
                </li>
                <li>Have you ever received an award?</li>
                <li>What type of student were you in high school?</li>
                <li>What are your interests outside of teaching?</li>
                <li>
                  Do you belong to any social networking websites (Facebook,
                  etc.)? Do you mind logging in and showing us your profile
                  right now?
                </li>
                <li>What do you feel is wrong with public education?</li>
                <li>Are you a flexible person?</li>
                <li>Why do you want to teach in this district?</li>
                <li>
                  Tell us about your references and what they would say about
                  you if they were here with us today.
                </li>
                <li>What would your last boss say about you?</li>
                <li>How would one of your students describe you?</li>
                <li>
                  Are you actively involved in any type of community service?
                </li>
                <li>
                  Imagine you are at your retirement party at the end of your
                  career. How would people describe you as a teacher?
                </li>
                <li>Do you want students to like you? Why or why not?</li>
                <li>Who do you look up to and want to emulate?</li>
              </ol>
              <h3>Interview Questions About Teaching Style</h3>
              <ol>
                <li>Would you say that you are a tough teacher?</li>
                <li>
                  Describe an example of when you used positive reinforcement.
                </li>
                <li>How do you integrate technology into your lessons?</li>
                <li>Are you a team player? Give us an example.</li>
                <li>
                  How do you allow students to express their creativity in your
                  classroom?
                </li>
                <li>
                  Do you have students use higher order thinking in your class?
                  Give an example.
                </li>
                <li>How do you develop self-esteem within students?</li>
                <li>How do you prepare students for standardized testing?</li>
                <li>How do you make learning fun?</li>
                <li>Describe a typical lesson.</li>
                <li>
                  What are techniques you use to teach besides direct
                  instruction?
                </li>
                <li>What do you do if the whole class is “not getting it”?</li>
                <li>How closely do you follow your lesson plan?</li>
                <li>
                  What do you put in your learning objectives of your lesson
                  plan?
                </li>
                <li>How do you incorporate writing into your lessons?</li>
                <li>Describe the most effective teaching techniques.</li>
                <li>How do you connect your lessons to the “real world”?</li>
                <li>Is it ok for a classroom to be noisy?</li>
                <li>
                  How much homework do you assign and how often do you assign
                  it? How do you know this is a good amount?
                </li>
                <li>How do you stay current in your field?</li>
              </ol>
              <h3>Interview Questions About Teacher Communication</h3>
              <ol>
                <li>
                  Give us examples of how you communicated with other teachers
                  in your department?
                </li>
                <li>
                  Give us an example of effective communication with an
                  administrator.
                </li>
                <li>
                  Have you ever utilized a class newsletter? What did you
                  include in the letter?
                </li>
                <li>
                  How would you deal with an angry parent if they called you?
                </li>
                <li>How do you communicate with parents on a regular basis?</li>
                <li>
                  How do you keep parents aware of their son’s or daughter’s
                  grades?
                </li>
                <li>
                  How would you react if a parent complained about your class?
                </li>
                <li>
                  What would you tell a parent if he or she was concerned about
                  their kid’s grades?
                </li>
                <li>
                  What would you do if you received a note from a parent asking
                  for their son to be excused from last night’s homework because
                  the student was too busy with another activity?
                </li>
                <li>
                  What course of action would you take if a student says he or
                  she is being abused at home?
                </li>
              </ol>
              <h3>
                Teacher Interview Questions About Differentiating Instruction
              </h3>
              <ol>
                <li>
                  Give an example of how you differentiated instruction in a
                  lesson.
                </li>
                <li>
                  How do you accommodate for a gifted student in your class?
                </li>
                <li>
                  How do you manage students with different reading abilities?
                </li>
                <li>Explain how you meet IEP needs.</li>
                <li>How do you feel about inclusive classrooms?</li>
                <li>
                  What is your experience co-teaching with an inclusion
                  specialist?
                </li>
                <li>How do you accommodate for non-English speakers?</li>
              </ol>
              <h3>Questions About Classroom Management</h3>
              <ol>
                <li>
                  What is your classroom management plan and what do you hope to
                  accomplish with it?
                </li>
                <li>What does a model classroom look like to you?</li>
                <li>How do you avoid misbehavior altogether?</li>
                <li>
                  What was the most difficult child you have ever dealt with?
                </li>
                <li>
                  Would you create a behavior modification plan for ongoing
                  misbehavior?
                </li>
                <li>
                  What is the most challenging behavioral situation you have
                  ever dealt with? How did you react?
                </li>
                <li>What are your classroom rules?</li>
              </ol>
              <h3>The Closing Interview Questions</h3>
              <ol>
                <li>
                  Is there anything we have not talked about that you would like
                  to share with us?
                </li>
                <li>Do you have any questions for us?</li>
              </ol>
              <br />

              <a name="generator">&nbsp;</a>
              <h2 className="text-center">
                Random Teacher Interview Generator
              </h2>

              <p>
                Below you will find a randomly generated teacher interview. You
                can press the button below to randomly generate a new interview
                whenever you want. (There are over a million unique interviews
                that can be generated.) Below each question you will find a hint
                that you can reveal if you choose.
              </p>

              <p>
                <strong>Consider answering these questions out loud</strong>, so
                that you can truly verbalize your thoughts and simulate a real
                interview. If you have a willing partner, have someone else read
                you the questions one-by-one to truly simulate the interview
                experience.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={this.generateQuestions}
                >
                  Generate a Random Set of Interview Questions!
                </button>
              </div>
              <h3>Question #1:</h3>
              <div>
                <strong>{this.state.q1}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> Have a 30-second to 2-minute
                summaryspeech about yourself prepared beforehand. Think about
                this as a commercial about yourself. Consider what makes you a
                great candidate and what makes you different from other teachers
                out there. Let your interviewers know what sets you apart from
                the rest of the pack.
              </div>
              <h3>Question #2:</h3>
              <div>
                <strong>{this.state.q2}</strong> <br />
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> The answer to this question will be
                personal to you. Try to work in phrases like "I'm passionate
                about helpingstudents/children and I find teaching an incredibly
                rewarding experience." AVOID saying things like "I'm in it for
                the paycheck and love my summers off."
              </div>
              <h3>Question #3:</h3>
              <div>
                <strong>{this.state.q3}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> Again, the answer to this will be
                personal to you, but keep in mind that you may run into
                questions that you may not be prepared for. Sometimes you will
                get questions that are meant to "throw you off" a bit. Some are
                easier than others to improvise with an answer. Just stay calm
                and answer this question as best as possible. This may be
                testing to see how you react to unexpected things.
              </div>
              <h3>Question #4:</h3>
              <div>
                <strong>{this.state.q4}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> It is common to get a question about
                classroom management and behavior. You should have an anecdotal
                account of how you turned a bad situation into a positive one.
                Explain that teachers should always have a backup plan and that
                they should expect the unexpected. Also, make sure you note that
                classroom management begins with your own preparation and lesson
                plan. An engaging lesson, means engaged students and engaged
                student leaves them no time to misbehave.
              </div>
              <h3>Question #5:</h3>
              <div>
                <strong>{this.state.q5}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> This question refers to your teaching
                style. Think back to your teaching experiences or student
                teaching experiences. Think about what works best for you and
                what an ideal lesson would look like. In a perfect world, you
                want to be able to describe lesson that is fun, creative,
                connects to the real world, adheres to standards, includes a
                check for learning, and utilizes technology.
              </div>
              <h3>Question #6:</h3>
              <div>
                <strong>{this.state.q6}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> Let your interviewers know that
                differentiating instruction is important and that you implement
                strategies on a regular basis. All students
                don".$single_quote."t learn in the same way, so it is important
                to present ideas in more than one way. It is also important to
                engage both gifted and struggling students. Think up a list of
                ways you differentiate instruction and be prepared to share
                actual examples.
              </div>
              <h3>Question #7:</h3>
              <div>
                <strong>{this.state.q7}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> Communication is a key part of education,
                whether it be with a student, co-worker, administrator, or
                parent. Be sure that you are regular communication with the
                people around you. Have a specific describable plan to keep
                parents "in the loop". Good communication with parents can be an
                incredible force to get a child to behave and learn in the
                classroom.
              </div>
              <h3>Question #8:</h3>
              <div>
                <strong>{this.state.q8}</strong>
              </div>
              <br />
              <div className="well well-lg">
                <strong>Hint:</strong> Always have a couple questions prepared
                to ask at the end of the interview. Possible questions: "What is
                it that YOU love about working here?" or "What originally
                attracted you to work at this school?"
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  onClick={this.generateQuestions}
                >
                  Generate a Random Set of Interview Questions!
                </button>
              </div>
            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Interview;
