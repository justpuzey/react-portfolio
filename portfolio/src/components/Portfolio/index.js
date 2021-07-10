import React from 'react';
const projectData = [
  {
    title: 'DateNite',
    description: 'this is a description',
    image: 'date-nige.png',
    github: 'jpuzey/datenite',
    url: '../../assets/images/date-nite.png',
  },
  {
    title: 'Run Buddy',
    description: 'this is a description',
    image: 'run-buddy.png',
    github: 'jpuzey/run-buddy',
    url: '../../assets/images/date-nite.png',
  }
];

let projects = projectData.map(function (projects) {
  // let projectImage = '../../assets/images/' + projects.image;
  return (
    <div key={projects.title} className="columns portfolio-item">
      <div className="item-wrap">

        <img alt={projects.title} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
        <div className="">
          <div className="portfolio-item-meta">
            <h5>{projects.title}</h5>
            <p>{projects.description}</p><br />
            <p>GitHub: {projects.github}</p>
          </div>
        </div>

      </div>
    </div>
  )
})


function Portfolio() {
  return (
    <section>
      <div className="row">

        <div className="twelve columns collapsed">

          <h1>PROJECTS</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
