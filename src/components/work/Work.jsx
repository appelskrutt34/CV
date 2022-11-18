function Work() {
  return (
    <section
      id="profession"
      aria-labelledby="professionalTitle"
      className="container-fluid padding-vertical-container-lg white-bg"
    >
      <h1 id="professionalTitle">Professional experience</h1>
      <div className="row justify-content-center margin-top-md">
        <div className="icon-card col-auto">
          <i className="fa-solid fa-heart"></i>
          <p className="font-m bold">Sogeti</p>
          <div className="icon-card-text">
            <p style={{ textAlign: "left" }}>
              Today I'm working as a web developer consultant for Sogeti.
              <span className="block"></span>I work with frontend- and backend
              on several different websites that are built with{" "}
              <span className="bold">ASP.NET MVC</span> and{" "}
              <span className="bold">Optimizely</span>. My work inlcudes both
              bug fixing, improving existing code and implementing new features.
              <span className="bold"></span>
              <span className="block"></span> I have also spent a lot of time
              updating websites to follow <span className="bold">WCAG</span>{" "}
              guidlines.
            </p>
            <p>
              Some tools I use at Sogeti:{" "}
              <span className="bold">
                Jira, Confluence, Azure DevOps, React, Optimizely, SQL Server,
                ASP.NET, Git
              </span>
            </p>
          </div>
        </div>

        <div className="icon-card col-auto">
          <i className="fa-solid fa-leaf"></i>
          <p className="font-m bold">Bonigi</p>
          <div className="icon-card-text">
            <p>
              At Bonigi I worked with maintaining and implementing new features
              for their website in{" "}
              <span className="bold">ASP.NET Webforms</span>.
              <span className="block"></span> The work consisted of both
              frontend- and backend development aswell as writing procedures in{" "}
              <span className="bold">SQL server</span>.
            </p>
            <p>
              Some tools I used while working for Bonigi:{" "}
              <span className="bold">
                Jira, Confluence, Azure DevOps, Azure Functions, SQL Server,
                Vue.Js, ASP.NET, Git
              </span>
            </p>
          </div>
        </div>

        <div className="icon-card col-auto">
          <i className="fa-solid fa-industry"></i>
          <p className="font-m bold">Husqvarna</p>
          <div className="icon-card-text">
            <p>
              At Husqvarna I worked in <span className="bold">WPF</span> to
              maintain their robotic lawnmower software.
            </p>
            <p>
              Some tools I used while working for Husqvarna:{" "}
              <span className="bold">
                Jira, Confluence, Azure DevOps, Scrum, WPF, Git
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
