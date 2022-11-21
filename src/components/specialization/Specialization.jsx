import style from "./specialization.module.css";
import ProgressBar from "./ProgressBar";
function Specialization() {
  return (
    <section
      id="specialization"
      className="container-fluid padding-vertical-container-lg white-bg"
      aria-labelledby="mySpecializationTitle"
    >
      <h1 id="mySpecializationTitle">My Specialization</h1>
      <div className="row justify-content-center margin-top-md">
        <div className={[style.card, style.cardPink, "col-auto "].join(" ")}>
          <svg viewBox="0 0 128 128" aria-labelledby="csharpTitle">
            <title id="csharpTitle" lang="en">
              Back end
            </title>
            <path
              d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"
              fill="white"
            ></path>
          </svg>
          <p>Back end</p>
          <div className={style.cardText}>
            <ul className="font-m margin-top-md">
              <li>C#</li>
              <li>ASP.Net</li>
              <li>Unity</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        </div>
        <div className={[style.card, style.cardBlue, "col-auto"].join(" ")}>
          <svg viewBox="0 0 128 128" aria-labelledby="javascriptTitle">
            <title id="javascriptTitle" lang="en">
              Front end
            </title>
            <path
              fill="white"
              d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
            ></path>
          </svg>
          <p>Front end</p>
          <div className={style.cardText}>
            <ul className="font-m margin-top-md">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Vue.Js</li>
              <li>Svelte</li>
            </ul>
          </div>
        </div>
        <div className={[style.card, style.cardGreen, "col-auto"].join(" ")}>
          <svg viewBox="0 0 128 128" aria-labelledby="solidityTitle">
            <title id="solidityTitle" lang="en">
              Web3
            </title>
            <path
              fill="white"
              d="M43.322 0L22.756 36.576l20.566 36.561 20.564-36.561h41.143L84.465 0H43.322zm41.342 54.863L64.1 91.424H22.955L43.519 128h41.145l20.58-36.576-20.58-36.561z"
            ></path>
          </svg>
          <p>Web 3</p>
          <div className={style.cardText}>
            <ul className="font-m margin-top-md">
              <li>Solidity</li>
              <li>Truffle</li>
              <li>Smart contracts</li>
              <li>ERC20</li>
              <li>ERC721</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialization;
