import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import Work from "./components/work/Work.jsx";
import Study from "./components/study/Study.jsx";
import Specialization from "./components/specialization/Specialization.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <svg
        viewBox="0 0 1872 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1874V30L0 143V0Z" fill="#181818" />
      </svg>
      <main>
        <Specialization />
        <Work />
        <Study />
      </main>
    </div>
  );
}

export default App;
