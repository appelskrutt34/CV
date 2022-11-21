import { useEffect, useRef } from "react";

function Work() {
  const SogetiMonths = useRef(null);

  useEffect(() => {
    if (!SogetiMonths) return;
    SogetiMonths.current.textContent = getMonthsFromDate(
      new Date("2022-01-01")
    );
    SogetiMonths.current.textContent += " (Current job)";
  }, []);

  const getMonthsFromDate = (dateFrom) => {
    let now = new Date();
    let months =
      now.getMonth() -
      dateFrom.getMonth() +
      12 * (now.getFullYear() - dateFrom.getFullYear());

    return months > 12 ? parseInt(months / 12) + " Years" : months + " Months";
  };

  return (
    <section
      id="profession"
      aria-labelledby="professionalTitle"
      className="container-fluid padding-vertical-container-lg white-bg"
    >
      <h1 id="professionalTitle">Professional experience</h1>
      <div className="row justify-content-center margin-top-md">
        <div className="icon-card col-md-auto">
          <i className="fa-solid fa-heart"></i>
          <p className="font-m bold">
            Sogeti
            <span className="block gray" ref={SogetiMonths}></span>
          </p>
          <div className="icon-card-text">
            <p>
              <span className="bold block">Key responsibilities:</span>
              Maintenance and development of new features on several different
              websites.
              <span className="block"></span>
              Updating websites to follow WCAG guidlines.
            </p>
            <br />
            <p>
              <span className="bold block">Tools:</span>
            </p>
            <ul>
              <li>Optimizely</li>
              <li>ASP.NET MVC</li>
              <li>React</li>
              <li>Azure DevOps</li>
              <li>SQL Server</li>
              <li>Git</li>
              <li>Jira</li>
              <li>Confluence</li>
            </ul>
          </div>
        </div>

        <div className="icon-card col-auto">
          <i className="fa-solid fa-leaf"></i>
          <p className="font-m bold">
            Bonigi
            <span className="block gray">1.5 years</span>
          </p>
          <div className="icon-card-text">
            <p>
              <span className="bold block">Key responsibilities:</span>
              Maintenance and development of Bonigis main website.
              <span className="block"></span>
              Writing procedures and processing data in the database.
              <span className="block"></span>
              Backend and database implementation of a customer project.
            </p>

            <br />
            <p>
              <span className="bold block">Tools:</span>
            </p>
            <ul>
              <li>ASP.NET Webforms</li>
              <li>Vue.Js</li>
              <li>Strapi</li>
              <li>Azure DevOps</li>
              <li>Azure Functions</li>
              <li>SQL Server</li>
              <li>Git</li>
              <li>Jira</li>
              <li>Confluence</li>
            </ul>
          </div>
        </div>

        <div className="icon-card col-auto">
          <i className="fa-solid fa-industry"></i>
          <p className="font-m bold">
            Husqvarna<span className="block gray">5 months</span>
          </p>
          <div className="icon-card-text">
            <p>
              <span className="bold block">Key responsibilities:</span>
              Maintenance and development of Husqvarnas software for robotic
              lawnmowers.
            </p>
            <br />
            <p>
              <span className="bold block">Tools:</span>
            </p>
            <ul>
              <li>WPF</li>
              <li>Azure DevOps</li>
              <li>Git</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
