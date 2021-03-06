import React from 'react';
const data = {
  education: [
    {
      school: 'University of Central Florida',
      degree: 'Coding Bootcamp Certificate',
      graduated: 'August 2021',
      gpa: 'A+ Academic Average',
      description: 'Coursework Included: HTML5, CSS, JavaScript, jQuery, Bootstrap, Express.js, Handlebars, React.js, Node.js, Database Theory, MongoDB, MySQL, Git'
    },
    {
      school: 'University of Central Florida',
      degree: 'Coding Bootcamp Certificate',
      graduated: 'August 2021',
      gpa: 'A+ Academic Average',
      description: 'Coursework Included: HTML5, CSS, JavaScript, jQuery, Bootstrap, Express.js, Handlebars, React.js, Node.js, Database Theory, MongoDB, MySQL, Git'
    }
  ],
  experience: [
    {
      company: 'Disney Parks Experience and Products',
      title: 'Lead Business Analayst',
      years: 'August 2021 - Present',
      description: 'Coursework Included: HTML5, CSS, JavaScript, jQuery, Bootstrap, Express.js, Handlebars, React.js, Node.js, Database Theory, MongoDB, MySQL, Git'
    },
    {
      company: 'Ciber',
      title: 'Lead Business Analayst',
      years: 'August 2021 - Present',
      description: 'Coursework Included: HTML5, CSS, JavaScript, jQuery, Bootstrap, Express.js, Handlebars, React.js, Node.js, Database Theory, MongoDB, MySQL, Git'
    }
  ]
};

let education = data.education.map(function (education) {
  return <div key={education.school}><h3>{education.school}</h3>
    <p className="info">{education.degree} <br /> <em className="date">{education.graduated}</em><span>&bull;</span><em className="date">{education.gpa}</em></p>
    <p>{education.description}</p></div>
})

let work = data.experience.map(function (work) {
  return <div key={work.company}><h3>{work.company}</h3>
    <p className="info">{work.title}<br /> <em className="date">{work.years}</em></p>
    <p>{work.description}</p>
  </div>
})


function Resume() {
  return (
    <section>
      <h1 id="resume">RESUME</h1>
      <div className="row resume">
        <div className="col-md-2">
          <h2><span>Education</span></h2>
        </div>
        <div className="col-md-10">
          <div className="row item">
            <div className="col-md-12">
              {education}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="col-md-2">
          <h2><span>Work Experience</span></h2>
        </div>

        <div className="col-md-10">
          {work}
        </div>
      </div>
    </section>
  );
}
export default Resume;
