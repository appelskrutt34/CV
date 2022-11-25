import style from "./study.module.css";

function Study() {
  return (
    <section
      id="education"
      aria-labelledby="educationTitle"
      className={[
        style.studyContainer,
        "container-fluid",
        "padding-vertical-container-sm",
      ].join(" ")}
    >
      <h1 id="educationTitle">Education</h1>
      <div className="row justify-content-center margin-top-md">
        <div className="icon-card icon-card-white col-auto">
          <i className="fa-solid fa-code" aria-hidden="true"></i>
          <p className="font-m bold">
            Software Development and Mobile Apps
            <span className="block gray">
              Bachelor's degree at Jönköpings university
            </span>
          </p>
          <div className="icon-card-text"></div>
        </div>
        <div className="icon-card icon-card-white col-auto">
          <i className="fa-solid fa-brands fa-unity" aria-hidden="true"></i>
          <p className="font-m bold">
            Technology and Game Development
            <span className="block gray">Senior high school</span>
          </p>
        </div>
        <div className="icon-card icon-card-white">
          <i className="fa-brands fa-ethereum" aria-hidden="true"></i>
          <p className="font-m bold">
            Smart Contract Programming
            <span className="block gray">Moralis Academy</span>
          </p>
        </div>
      </div>
      <div className="row justify-content-center margin-top-md">
        <a
          className="col-auto"
          href="https://www.dropbox.com/s/7nx25tyhuhirzou/Ebba-Svensson-Ethereum-Smart-Contract-Programming-101-Ethereum-Smart-Contract-Programming-101-Moralis-Moralis-Academy.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("./assets/scp101.png")}
            aria-hidden="true"
            alt="Smart contract programming 101 certificate"
          />
        </a>
        <a
          className="col-auto"
          href="https://www.dropbox.com/s/i1jluwm5egl7h0i/Ebba-Svensson-Ethereum-Smart-Contract-Programming-201-Ethereum-Smart-Contract-Programming-201-Moralis-Moralis-Academy.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("./assets/scp102.png")}
            alt="Smart contract programming 201 certificate"
          />
        </a>
        <a
          className="col-auto"
          href="https://www.dropbox.com/s/6mtfc98bt2ez7ra/Ebba-Svensson-Build-an-NFT-Marketplace-Ethereum-Dapp-Programming-Moralis-Moralis-Academy.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("./assets/dapp.png")}
            alt="Dapp programming certificate"
          />
        </a>
      </div>
    </section>
  );
}

export default Study;
