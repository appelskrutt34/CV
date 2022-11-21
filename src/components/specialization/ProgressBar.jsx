import style from "./progressBar.module.css";

function ProgressBar(percentage) {
  return (
    <div className={style.barContainer}>
      <div className={style.bar} style={{ width: percentage }}></div>
    </div>
  );
}

export default ProgressBar;
