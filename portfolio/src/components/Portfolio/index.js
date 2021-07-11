import React from 'react';
import dateNite from '../../assets/images/date-nite.png';
import runBuddy from '../../assets/images/run-buddy.png'
import waterWays from '../../assets/images/water-ways.png'
// import dateNite from '../../assets/images/date-nite.png'
// import dateNite from '../../assets/images/date-nite.png'
// import dateNite from '../../assets/images/date-nite.png'

const projectData = [
  {
    title: 'DateNite',
    description: 'this is a description',
    image: dateNite,
    github: 'github.com/justpuzey/DateNite',
    url: 'https://justpuzey.github.io/DateNite/',
  },
  {
    title: 'Water Ways',
    description: 'this is a description',
    image: waterWays,
    github: 'github.com/justpuzey/water-sports-xchange',
    url: 'https://waterwaysrentals.herokuapp.com/',
  },
  {
    title: 'DateNite',
    description: 'this is a description',
    image: dateNite,
    github: 'github.com/justpuzey/DateNite',
    url: 'https://justpuzey.github.io/DateNite/',
  },
  {
    title: 'Water Ways',
    description: 'this is a description',
    image: waterWays,
    github: 'github.com/justpuzey/water-sports-xchange',
    url: 'https://waterwaysrentals.herokuapp.com/',
  },
  {
    title: 'DateNite',
    description: 'this is a description',
    image: dateNite,
    github: 'github.com/justpuzey/DateNite',
    url: 'https://justpuzey.github.io/DateNite/',
  },
  {
    title: 'Water Ways',
    description: 'this is a description',
    image: waterWays,
    github: 'github.com/justpuzey/water-sports-xchange',
    url: 'https://waterwaysrentals.herokuapp.com/',
  }
];

let projects = projectData.map(function (projects) {
  // let projectImage = '../../assets/images/' + projects.image;
  return (
    <div key={projects.title} className="col-md-4 mt-2 ">


      <div className="card-header text-light card text-center" style={{ width: "100%" }}>
        {projects.title}
      </div>

      <div className="card img-fluid" style={{ width: "100%", height: '12em' }}>
        <img src={projects.image} alt="Card image" style={{ width: "100%" }} />
        {/* <img className="card-img-top" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Card image" style={{ width: "100%" }} /> */}
        <div className="card-img-overlay">
        </div>
      </div>

      <div className="card-footer text-muted" style={{ width: "100%", align: "center" }}>
        <div className="row justify-content-center">

          <a href={projects.github} className="btn btn-primary" style={{ width: "40%", align: "center", margin: "2px" }}>GitHub</a>

          <a href={projects.url} className="btn btn-secondary" style={{ width: "40%", align: "center", margin: "2px" }}>Site</a>

        </div>
      </div>
      {/* <a href="/product-detail/{{item.id}}" className="stretched-link"></a> */}

    </div>


  )
})


function Portfolio() {
  return (
    <section>
      <div className="row">

        <div className="">

          <h1>PROJECTS</h1>

          <div id="portfolio-wrapper" className="container" style={{ width: "100%" }}>
            <div class="row mb-2" style={{ width: "100%" }}>
              {projects}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
