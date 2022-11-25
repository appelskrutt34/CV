import style from "./nav.module.css";

function Nav() {
  const toggleNav = () => {
    let linkContainer = document.getElementById("linkContainer");
    console.log(linkContainer);
    if (linkContainer.classList.contains("display-flex")) {
      linkContainer.classList.remove("display-flex");
    } else {
      linkContainer.classList.add("display-flex");
    }
  };

  return (
    <nav id="nav" className={style.nav}>
      <button
        alt="Toggle navigation"
        onClick={toggleNav}
        className={["btn", style.navBtn].join(" ")}
      >
        <i className="fa-solid fa-burger" aria-hidden="true"></i>
      </button>
      <div id="linkContainer" className={style.linkContainer}>
        <button
          onClick={() =>
            document
              .getElementById("specialization")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Specialization
        </button>
        <button
          onClick={() =>
            document
              .getElementById("profession")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Profession
        </button>
        <button
          onClick={() =>
            document
              .getElementById("education")
              .scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Education
        </button>
      </div>
    </nav>
  );
}

export default Nav;
