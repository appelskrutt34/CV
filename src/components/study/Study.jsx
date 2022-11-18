import style from "./study.module.css";

function Study() {
  return (
    <section
      id="education"
      aria-labelledby="educationTitle"
      className={[
        style.studyContainer,
        "container-fluid",
        "padding-vertical-container-lg",
      ].join(" ")}
    >
      <h1 id="educationTitle">Education</h1>
      <div className="row justify-content-center margin-top-md">
        <div className="icon-card icon-card-white col-auto">
          <i
            className={["fa-solid", "fa-code", style.softwareIcon].join(" ")}
            aria-hidden="true"
          ></i>
          <p className="font-m bold">Software Development and Mobile Apps</p>
          <div className="icon-card-text">
            <p>
              At Jönköping University I had a broad education over 3 years
              covering everything from machine code and operating systems up to
              web & app development.
              <span className="block"></span>
            </p>
          </div>
        </div>

        <div className="icon-card icon-card-white col-auto">
          <i
            className={["fa-solid", "fa-brands fa-unity", style.gameIcon].join(
              " "
            )}
            aria-hidden="true"
          ></i>
          <p className="font-m bold">Technology and Game Development</p>
          <div className="icon-card-text">
            <p>
              In Senior high school I learned the basics of programming and how
              to make games with XNA game studio and Unity.
              <span className="block"></span>
            </p>
          </div>
        </div>
        <div className="icon-card icon-card-white col-auto">
          <i
            className={["fa-solid", "fa-book", style.russianIcon].join(" ")}
            aria-hidden="true"
          ></i>
          <p className="font-m bold">Russian Language and Culture</p>
          <div className="icon-card-text">
            <div className="icon-card-text">
              <p>
                I studied russian level 1-3 for one year aswell as one month in
                Russia.
              </p>
            </div>
          </div>
        </div>

        <div className="icon-card icon-card-white col-auto">
          <i
            className={["fa-solid", "fa-socks", style.soliderIcon].join(" ")}
            aria-hidden="true"
          ></i>
          <p className="font-m bold">
            Basic soldier training for the Home guard
          </p>
          <div className="icon-card-text">
            <p>
              At P4 Skövde I learned the values and codes of conduct as well as
              solider rules. I practiced shooting and handling a rifle, giving
              first aid and using medical supplies.
            </p>
          </div>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div className="icon-card icon-card-white">
          <i className="fa-brands fa-ethereum" aria-hidden="true"></i>
          <p className="font-m bold">Web3</p>
          <div className="icon-card-text">
            <div className="icon-card-text">
              <p>
                I'm currently learning as much as possible about web3 with a
                focus on the ethereum network.
              </p>
            </div>
          </div>
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
