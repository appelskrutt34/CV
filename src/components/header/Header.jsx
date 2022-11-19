function Header() {
  return (
    <header className="container-fluid padding-vertical-container-sm">
      <div className="row justify-content-center">
        <div className="col-auto" style={{ padding: "2em" }}>
          <img src={require("./11.png")} alt="Ebba" />
        </div>
        <div className="col-auto center-vertical" style={{ padding: "2em" }}>
          <div className="text-left">
            <h1>Hello! My name is Ebba.</h1>
            <h2>I am a Web Developer.</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
